---
layout: default
title: Home
class: home
---

{% for entry in site.data.home %}<span class="home-entry scramble entry-{{ forloop.index }}">{{ entry.entry }}</span>{% if forloop.last %}.{% else %} --- {% endif %}{% endfor %}