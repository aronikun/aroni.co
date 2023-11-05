# aroni.co

This is expiremental grounds for my web development. It serves a few purposes.

- To keep a running portfolio on the things that I work on and take an interest in.
- To offer my services as a web developer or designer.
- To help potential clients understand the development process.
- To keep learning and to try to keep up with technology.

## Introduction

I consider myself a beginner and I probably always will be. I have been in and out of the web and design industry for over 10 years. My weakness is in programming and my strengths are in design.

This is the first project I have really done for myself, and I think it is about time. I have always been employed in some manner so I have never had a real need to have my own homepage. I still don't. But I am trying to do better in life for myself, mentally and financially. I feel that improving on the skills I have, learning new ones and allowing people to know about that will give me more options moving forward.

With my own projects and experiments, the most limiting factors for project completion is my own expectations and time. To manage this, I will use a timer, tools I am familiar with and to keep any tasks as small in scope as possible. I intend to have this complete within the month.

## Technologies and Tools

There are four bullet points above and here is my thinking for achieving them.

1. **Running Portfolio:** ~~Wordpress. I dislike the tecnology behind it, but I am familiar with it, I can set it up very easily and it seems suitable to keep a running portfolio of things I work on and take interest in. This won't be the main technology behind the homepage but behind any blog type link on the homepage. For now, this will be managed outside of the repository and backed up using other means. The reason being, CI/CD deploys only code and not database entries.~~ Jekyll. The amount of effort required to produce a suitable site as a web developer using Wordpress is too much. I'd rather make posts in markup and have it formatted. This will make it easier to version it on GitLab.
2. **Offering Services:** These pages *should* be coded in just HTML / CSS and minimal Javascript. It should include a contact form, policies and examples. It will match the design of the blog.
3. **Helping clients understand the development process:** This should be a mix of being included on the services pages with links to relavent blog posts.
4. **To keep learning:** I will need a space to try new technologies and to let people see them online. This can be done on folders within the aroni.co domain.

Tasks will be managed by issues within this repository. They'll be broken down as needed.

Lets get to it.

## Jekyll Installation

Installing Jekyll can be a pain so I've included it here.

Install Ruby: <https://www.ruby-lang.org/en/documentation/installation/>

For Windows make sure you're using a terminal with administrative priveledges.

Install Ruby Gems: `gem update --system`
Then `ridk install`

- Install MYSYS2 base installation
- Install MYSYS and MINGW Development toolchain

Install Jekyll:

- (Windows): <https://jekyllrb.com/docs/installation/windows/>
- (Mac): <https://jekyllrb.com/docs/installation/macos/>
- (Ubuntu): <https://jekyllrb.com/docs/installation/ubuntu/>

### Quick Windows Install Command List

For Windows go to the directory where you want to install your website and run the following commands:

- `gem install jekyll bundler`
- `jekyll new my-awesome-site` (Change my-awesome-site to something you want)
- `cd my-awesome-site` (Or to the folder you just made)
- `bundle install`
- `bundle exec jekyll serve`

You should now see your website on `localhost:4000`

Note: In the [tutorial](https://jekyllrb.com/docs/step-by-step/02-liquid/) there's an important detail not mentioned. If you're not copying and pasting you may miss this:

- In order to render *Liquid* you must include front matter at the top of your page eg:

``` html
---
# This a comment between Front Matter triple hyphens.
---
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Home</title>
  </head>
  <body>
    <h1>{{ "Hello World!" | downcase }}</h1>
  </body>
</html>

</html>
```
