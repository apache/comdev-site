---
title: GSoC admins
tags: ["gsoc","mentoring"]
---

A comprehensive guide to being a GSoC admin for the ASF

List of duties:

1. Make sure the ASF has an extensive list of project ideas ready shortly after Google announces the
program (around the end of January). Projects must create Jira issues for their ideas and
label them with `gsoc<year>;` and `mentor`. If a project doesn't use Jira, have them create the ideas in the GSOC
Jira project. Create a Jira filter for these ideas to use in the application (see next). Have
prospective mentors subscribe to `mentors@community.apache.org`. The following is an email sent to `pmcs@a.o`
explaining the procedures to them:

<pre>
Hello PMCs,

Google Summer of Code is the ideal opportunity for you to attract new
contributors to your projects.

If you want to participate with your project you now need to

 - understand what it means to be a mentor [1]
 - propose your project ideas. Just label your issues with gsoc2023 in Jira and
   they will show up at [2]. See also [1].
 - subscribe to mentors@community.apache.org (restricted to potential mentors, meant to be used
   as a private list - general discussions on the public
   dev@community.apache.org list as much as possible, please)

The ASF has applied as a participating organization with GSoC, so your project
doesn't need to do that. See [3] for more information. Note that the ASF isn't
accepted yet; nevertheless you *really* should start recording your ideas now.

Last year we had XX students complete GSoC successfully, some of whom are
now active contributors to the projects they worked on. Let's make this a
success again this year!

On behalf of the GSoC 20XX admins,

Uli

[1] https://community.apache.org/gsoc/guide-to-being-a-mentor.html
[2] https://s.apache.org/gsoc2011tasks
[3] https://community.apache.org/gsoc/
</pre>

1. Update our GSoC pages at [https://community.apache.org/gsoc/](/gsoc/) with the
current year's timeline and at [https://community.apache.org/gsoc/guide-to-being-a-mentor.html](guide-to-being-a-mentor.html).

1. Apply for the ASF to be a mentoring organization for Google Summer of Code.
I faintly remember that they wanted to know some stats like how often we have
already participated and what the number of students was last year. I believe
the ASF has participated since GSoC's inception in 2005. Consult [participation statistics](/gsoc/experiences.html), although the page may not be up to date.

1. Once our application is accepted, write a press release and
request press@ to send it out. We don't have a template yet, so work
with th `dev@community.apache.org` and `press@apache.org` lists to get one
written and add it here.

1. Check with Google whether they changed the ranking process -- again. Find out
what we need to be change to our internal ranking process in order to be compatible
with melange (the system Google uses to administer GSOC) and update the [mentee ranking process](mentee-ranking-process.html) page
accordingly. In 2011 we used a Google Docs spreadsheet and did our ranking there. The
org admin (and only the org admin) then transferred the rankings to Melange.

1. Once the application phase starts, make sure that mentors rank the proposals. They
should complete this at least one week before Google's official deadline in order to have
some time for changes that might become necessary. Send reminders.

1. Once Google has assigned our slots and we know who is accepted,
mail each mentee with details of the `dev@community.apache.org` list, which they can
use for general assistance with the ASF. They should seek project-specific
assistance on the project's `dev` list. We don't have a
template for this yet. Please add it here when one is written.

1. Once GSoC is under way, make sure we meet deadlines for midterm and final evaluations. Make it clear to the mentors that we'd like to see their evaluation way before
the end of the deadline. If a mentor still hasn't submitted their evaluation three days
before the end of the deadline period, mail their PMC and ask them whether they know of
any reason why the mentor might not be able to do the evaluation.

1. Once GSoC is done, get a PO# from Google to invoice against. Supplier name is The
Apache Software Foundation, 1901 Munsey Drive, Forest Hill, MD 21050-2747. Our vendor ID
with Google is 13039.

1.  Issue a press release congratulating those who have passed and
thanking our wonderful mentors. We should invite everyone to come and
contribute to ASF projects. We should include some stats such as the
number of full committers resulting from GSoC, the number of issues
closed etc. We don't have a template yet but work with the
`dev@community.apache.org` and `press@apache.org` lists to get one written
and add it here.

1. Decide who is going to the mentor summit. If you are going, book your flight (or arrange the details for attending virtually) and
nag the comdev PMC chair to submit your travel expenses to financials/Bills/received (if
you don't have access yourself) and move them to `financials/Bills/approved`.

1. Ask treasurer to invoice Google. The amount is number of students * USD 500 (at time
of writing) + actual travel expenses up to USD 2,000. Attach PO document (you'll get that
from Google at some point). Example:

<pre>
Geir,

please invoice Google the following, according to attached purchase order:

40x Google Summer of Code 2011 mentor stipends for 40 student á USD 500.00 = USD 20,000.00
1x travel expenses for mentor summit participant Noirin Plunkett = USD 743.70 (see [1], [2], [3])
1x travel expenses for mentor summit participant Ulrich Stärk = EUR 834.03 = USD 1190,91 @1.4279
USD/EUR as of 2011/08/09 (see [4] and [5])

PO# is 132387, vendor ID is 13039

The payment process to follow is:

Payment Process - Step Two

Once you receive your Purchase Order via email, you can then bill Google for your mentoring
organization's payment. In order to receive payment, please send a PDF invoice to p2phelp@google.com
and cc carols@google.com on the message.

Your invoice *must* include the following information:

   1. Name and address of your organization - official letterhead is preferred if available, must
match supplier enrollment
   2. Line(s) stating what the money is for e.g. "For mentoring 3 Google Summer of Code students for
the Foo project"
   3. It is likely most useful to simply mirror the wording on the Purchase Order you receive
   4. If you have purchased flights for the mentor summit, invoice only for the amount paid for
airfare or driving mileage (55 cents/mile, locals only)
         1. Amount of payment in USD
         2. Your invoice MUST include the PO#.
         3. Your invoice MUST be dated after the issue date of your PO number



Google has to receive the PDF invoice by November 4th, 2011 and it has to include PDF copies of our
actual travel expenses, i.e. [2],[3],[4] and [5].

Thanks,

Uli


[1] https://svn.apache.org/repos/private/financials/Bills/approved/Noirin-GSoC/README
[2] https://svn.apache.org/repos/private/financials/Bills/approved/Noirin-GSoC/Noirin-GSoC-Amtrak.pdf
[3] https://svn.apache.org/repos/private/financials/Bills/approved/Noirin-GSoC/Noirin-GSoC-Delta.pdf
[4] https://svn.apache.org/repos/private/financials/Bills/received/Uli-GSOC-flights.txt
[5]
https://www.oanda.com/currency/historical-rates-classic?date_fmt=us&date=08/09/11&date1=08/09/11&exch=EUR&exch2=EUR&expr=USD&margin_fixed=0&format=HTML&redirected=1

</pre>
