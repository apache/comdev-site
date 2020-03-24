---
title: Apache Conferences Calendar
---

## Deprecated - See New Calendar instead

This calendar is no longer maintained; please see [http://community.apache.org/calendars/](/calendars/) instead.

This Calendar is maintained by the Apache Community Development Committee (ComDev),
to have your event listed considered for addition please mail [dev@community.apache.org][1].
Note that to be listed in this calendar events must conform to the [Third Party Event Branding Policy][2].

## Upcoming events

* _List loading_

<iframe src="https://www.google.com/calendar/embed?src=nerseigospses068jd57bk5ar8%40group.calendar.google.com&ctz=America/New_York"
style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>

This Calendar is also available as an [iCal feed][3]

<script type="text/javascript">
function handleContents(li, text) {
   if(text == undefined || text.length == 0) {
      return;
   }
   parts = text.split("\n");
   for(var i=0; i<parts.length; i++) {
      li.appendChild(document.createElement("br"));
      li.appendChild(document.createTextNode(parts[i]));
   }
}

var dateRegExp = new RegExp("^(\\d{4})-(\\d{2})-(\\d{2})$");
function handleDates(li, when) {
   var from = when['startTime'];
   var to = when['endTime'];
   if(from.match(dateRegExp) && to.match(dateRegExp)) {
      var fp = from.split(dateRegExp);
      var tp = to.split(dateRegExp);
      var fromDate = new Date(fp[1],fp[2]-1,fp[3]);
      var toDate = new Date(tp[1],tp[2]-1,tp[3]);
      var realToDate = new Date(toDate.getTime() - 24*60*60*1000);

      var text;
      if(fromDate.getTime() == realToDate.getTime()) {
         // Single day
         text = from;
      } else {
         // Really multi day
         text = from + " to " + realToDate.getFullYear() + "-" +
                (realToDate.getMonth()+1) + "-"  + realToDate.getDate();
      }
      li.appendChild(document.createTextNode(" - " + text))
   } else {
      li.appendChild(document.createTextNode(" - " + from))
   }
}

function render(data) {
   var ev = document.getElementById("events");
   if(ev.hasChildNodes()) {
      while(ev.childNodes.length >= 1) {
         ev.removeChild(ev.firstChild);
      }
   }

   var feed = data.feed;
   for(var i=0; i<feed.entry.length; i++) {
      var entry = feed.entry[i];
      var title = entry.title.$t;
      var text = entry.content.$t;
      var when = entry['gd$when'][0];

      var li = document.createElement("li");
      var li_b = document.createElement("b");
      li_b.appendChild(document.createTextNode(title));
      li.appendChild(li_b);
      handleDates(li, when);
      handleContents(li, text);
      ev.appendChild(li);
   }
}
</script>
<script src="http://www.google.com/calendar/feeds/nerseigospses068jd57bk5ar8@group.calendar.google.com/public/full?alt=json-in-script&callback=render&orderby=starttime&max-results=30&singleevents=true&sortorder=ascending&futureevents=true"></script>

  [1]: mailto:dev@community.apache.org
  [2]: http://www.apache.org/foundation/marks/events.html
  [3]: https://www.google.com/calendar/ical/nerseigospses068jd57bk5ar8%40group.calendar.google.com/public/basic.ics
