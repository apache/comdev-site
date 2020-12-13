---
title: "How To: Write A Mentor Request Email"
---

Having identified a Top Level Project (TLP) and an issue you would like to work on, it is a
good idea to introduce yourself to the project community and outline your
plans for tackling the issue. This lets the community know you are working
on the issue and gives the community an early opportunity to help course
correct your proposal, if necessary (which can save you lots of time). 

Here's an example of what your first email might look like:

```text  
SUBJECT: A proposal for Skinnable widgets (WOOKIE-131)

Hi, I'm new to the Wookie project but I'd like to tackle the "Skinnablewidgets" 
issue (WOOKIE-131, see [1]). Before I start implementing this I'd like to 
run my ideas past you to make sure I'm not missing something important.

If I understand the issue correctly, we need to define the structure of a minimal 
widget. For example:

<div id="wookie-widget">
  <div id="wookie-toolbar">This is where the toolbar will be</div>
  <div id="wookie-content">This is where the content will be</div>
  <div id="wookie-footer">This is where the footer will be</div>
</div>

We also need to provide a default CSS for rendering this as, for example:

+-----------------------+
|TOOLBAR		|
+-----------------------+
|			|
|CONTENT		|
|			|
+-----------------------+
|FOOTER 		|
+-----------------------+

We need to document all this (how to use it and how to extend it) on the Wookie website, and change all widgets to conform to 
this format.

Once all this is in place I would like to start extending it to provide documented 
CSS identifiers to use in common cases. For example, we may want to define a
"wookie-navigation" style for a common navigation menu. We can then provide 
various CSS alternatives for rending this as a vertical navigation menu, drop down 
menu, or whatever.

Am I on the right track? Are there any important points I'm missing?

[1]  https://issues.apache.org/jira/browse/WOOKIE-131
```

There are two main advantages to sending a mail like this. First, you
force yourself to think carefully about what the project requires and whether you
have the skills to do it (and thus where you will need help). Second, it lets
people in the community provide input. For example, in the above case
the community might point out that there is a widget template
system that would need modification to use this format consistently.
