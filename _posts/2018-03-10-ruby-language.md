---
layout: post
title: "Ruby Language"
date: 2018-03-10 15:43:19
category: news
---
![image](/css/images/ruby.jpg){:height="50%" width="50%"}
<!-- <img src="/css/images/ruby.jpg" alt="" width="40%"> -->

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

### Source
[Official site](https://www.ruby-lang.org/en/about/)

### Free Course Of Ruby Language
[Codeacademy](https://www.codecademy.com/learn/learn-ruby)