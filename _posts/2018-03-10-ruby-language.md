---
layout: post
title: "Ruby Language"
date: 2018-03-10 15:43:19
category: news
---
<section class="img_post_md">
![image tooltip here](/css/images/ruby.png)
</section>

### Ruby Languge

Ruby is a dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.

### Ruby’s Flexibility

Ruby is seen as a flexible language, since it allows its users to freely alter its parts. Essential parts of Ruby can be removed or redefined, at will. Existing parts can be added upon. Ruby tries not to restrict the coder.

For example, addition is performed with the plus (+) operator. But, if you’d rather use the readable word plus, you could add such a method to Ruby’s builtin `Numeric` class.

{% highlight ruby %}
class Numeric
  def plus(x)
    self.+(x)
  end
end

y = 5.plus 6
# y is now equal to 11
{% endhighlight %}
Ruby’s operators are syntactic sugar for methods. You can redefine them as well.

https://www.ruby-lang.org/en/about/