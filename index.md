---
layout: default
title: Home
class: home
---

{% for entry in site.data.home %}<span class="home-entry scramble entry-{{ forloop.index }}">{{ entry.entry }}{% if forloop.last %}.{% else %} --- {% endif %}</span>{% endfor %}