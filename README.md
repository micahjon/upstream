# Upstream Landing Page

## Building Jekyll locally on a Mac

- brew update
- brew install ruby

- which ruby
- which gem
(just to ensure they're both in /usr/local/bin)

Restart terminal, then...

- gem install jekyll
- gem install bundler

And now clone down the repo.

- git clone https://github.com/pranksinatra/upstream.git
- cd upstream
- bundle install
- bundle exec jekyll serve

This will build the static site (localhost:4000)

To compile CSS with gulp, in a new terminal tab..

- yarn install
- gulp

Then as you update CSS files, they'll be processed on the fly!
