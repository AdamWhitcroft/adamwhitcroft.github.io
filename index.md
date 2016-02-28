---
layout: default
class: home
meta-title: Adam Whitcroft, Designer
availability: available
footnotes:
  - key: 1
    value: "<a href='/batch'>Batch</a>, <a href='/climacons'>Climacons</a> and <a href='/offscreen'>City Icons for Offscreen Magazine</a>."
  - key: 2
    value: "<a href='/wirekit'>Wirekit</a>, <a href='/apaxy'>Apaxy</a> and <a href='/proto'>Proto</a>"
  - key: 3
    value: "&ldquo;<a href='http://skl.sh/1P1KSd8'>Icon Design: Create a Cohesive Icon Set</a>&rdquo; on Skillshare. If you're curious about my approach to icon design, this short course might interest you. I cover the full process from conceptualisation to realisation using Adobe Illustrator and Adobe Photoshop."
  - key: 4
    value: "&ldquo;<a href='http://theindustry.cc/2013/06/24/an-interview-with-adam-whitcroft/'>An Interview with Adam Whitcroft</a>&rdquo; on The Industry."
---

<div class="mega">
	<p>I'm a South African born designer living in the United Kingdom. I've released several well known <a href="#fn-1" class="fn-link">icon projects<sup>1</sup></a> alongside other <a href="#fn-2" class="fn-link">open source design helpers<sup>2</sup></a>. I've taught a successful <a href="#fn-3" class="fn-link">Skillshare<sup>3</sup></a> course and I've been interviewed by <a href="#fn-4" class="fn-link">The Industry<sup>4</sup></a>.I'm currently {{ page.availability }}<sup class="non-italics">{% if page.availability == 'available' %}😀{% else %}😭{% endif %}</sup> for freelance work. Find me on <a href="https://twitter.com/adamwhitcroft">Twitter</a>, <a href="https://instagram.com/adamwhitcroft/">Instagram</a>, <a href="https://dribbble.com/adamwhitcroft">Dribbble</a> and <a href="https://github.com/AdamWhitcroft">Github</a></p>
	<p>View my <a href="/portfolio/">selected works</a>.</p>
</div>

<hr>

{% if page.availability == 'available' %}
  {% include availability.html %}
{% endif %}

{% include yo.html %}

{% include suggested-cause.html title="Charity Water" body="Charity Water are doing amazing work to help families in rural communities get access to clean drinking water. Please consider taking a few minutes to visit their website to learn how you could help." link="http://www.charitywater.org/" %}

{% include footnotes.html %}
