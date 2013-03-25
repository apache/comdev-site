package view;

#
# BUILD CONSTRAINT:  all views must return $content, $extension.
# additional return values (as seen below) are optional.  However,
# careful use of symlinks and dependency management in path.pm can
# resolve most issues with this constraint.
#

use strict;
use warnings;
use Dotiac::DTL qw/Template/;
use Dotiac::DTL::Addon::markup;
use ASF::Util qw/read_text_file/;

push @Dotiac::DTL::TEMPLATE_DIRS, "templates";

# This is most widely used view.  It takes a
# 'template' argument and a 'path' argument.
# Assuming the path ends in foo.mdtext, any files
# like foo.page/bar.mdtext will be parsed and
# passed to the template in the "bar" (hash)
# variable.
sub normal_page {
    my %args = @_;
    my $file = "content$args{path}";
    $args{path} =~ s/\.mdtext$/\.html/;

    my $template = $file;
    if($args{template}) {
       $template = $args{template};
    }

    read_text_file $file, \%args;
    $args{breadcrumbs} = breadcrumbs($args{path}, $args{headers});

    my $page_path = $file;
    $page_path =~ s/\.[^.]+$/.page/;
    if (-d $page_path) {
        for my $f (grep -f, glob "$page_path/*.mdtext") {
            $f =~ m!/([^/]+)\.mdtext$! or die "Bad filename: $f\n";
            $args{$1} = {};
            read_text_file $f, $args{$1};
        }
    }

    return Dotiac::DTL::Template($template)->render(\%args), html => \%args;
}

# Generates cwiki-style breadcrumbs
sub breadcrumbs {
    my ($fullpath, $headerref) = @_;
    my @titles = split m!/!, $fullpath;
    my @paths = split m!/!, $fullpath;

    if($paths[scalar@paths-1] =~ /^index/) { 
      pop @titles; 
      pop @paths; 
    } else {
      if($headerref && $headerref->{title}) {
         $titles[scalar@titles-1] = $headerref->{title};
      }
    }
    $titles[0] = "Home";

    my @rv;
    my $relpath = "/";
    for(my $i=0; $i<scalar @paths; $i++) {
        my $title = $titles[$i];
        $relpath .= $paths[$i];
        push @rv, qq(<a href="$relpath">\u$title</a>);
        unless($relpath eq "/") { $relpath .= "/"; }
    }
    my $breadcrumbs = qq(<ul class="breadcrumb">\n<li>);
    $breadcrumbs .= join qq( <span class="divider">/</span></li>\n<li>), @rv;
    $breadcrumbs .= "</li>\n</ul>";
    return $breadcrumbs;
#    return join "&nbsp;&raquo&nbsp;", @rv;
}

1;

=head1 LICENSE

           Licensed to the Apache Software Foundation (ASF) under one
           or more contributor license agreements.  See the NOTICE file
           distributed with this work for additional information
           regarding copyright ownership.  The ASF licenses this file
           to you under the Apache License, Version 2.0 (the
           "License"); you may not use this file except in compliance
           with the License.  You may obtain a copy of the License at

             http://www.apache.org/licenses/LICENSE-2.0

           Unless required by applicable law or agreed to in writing,
           software distributed under the License is distributed on an
           "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
           KIND, either express or implied.  See the License for the
           specific language governing permissions and limitations
           under the License.

