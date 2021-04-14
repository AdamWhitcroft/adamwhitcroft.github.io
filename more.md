---
title: Finds
layout: default
class: more
permalink: /finds/
---

{% for post in site.posts %}

<article id="s-{{ forloop.rindex }}" {% if forloop.last %}style="margin-bottom: 0;"{% endif %}>
    <a href="{{ site.url }}/finds/#s-{{forloop.rindex}}" class="article-link">&sect;</a>
    {{ post.content }}
</article>

{% endfor %}
