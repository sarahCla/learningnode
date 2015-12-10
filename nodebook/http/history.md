

#一点历史

时间回到1989年。

一个物理学家想要做一个可以在不同地点的科学家之间分享知识的超文本文档网络。他称之为  World Wide Web  （www,世界范围的网络——多么宏大的名字）。随后他编写了让世界网络称为现实的服务器和客户端。

这样，一个简单的想法，逐步的吸引了更多的人投入进来。称为如今互联网的最异彩纷呈的部分。Web，就被启动了。

www技术包括了http协议，html标准，以及作为实现的众多的服务器、客户端，代理软件。互联网的位于应用层的一个部分。和它处于同一层面的还有很多包括email，ftp，telent等。

这个物理学家就是tim berners-lee。

超文本本身被称为html。它的"超"字，来源于一个最显著的特点：在一个html文档内，除了本文档的内容外，还可以通过URL指向其他文档，图片，视频等不同的媒体格式。

当前他做出为了传递超文本文档，设计了一套应用层协议，随后被标准化，正式协议文本的第一版为http 1.0(1996年）。之前的协议，虽然没有被正式规范，为了沿袭兼容，被称为http 0.9。

当年berners-lee采用的NeXTStep环境，经过多年的小众和低调，如今以ios的新包装浴火重生，而http则因为互联网的潮流，快速的登上主流的应用层协议。

在这里，我们关心http（超文本传输协议）。

#为何搞一个新的协议

在berners-lee的年代，已经存在了一些应用层协议，包括email,ftp,news，但是他提出了现有协议的局限和新协议的更多需求。

email用来有作者发起，发送一些暂态的消息给少量的接收者。
ftp 可以传递文档，但是在响应者一端只能做很少的处理。
news 可以广播暂态消息给大量听众

基于这样的认识，http应该能够：

1. 只要一部分的文件传输功能。http只要客户端单向发起，服务端单向响应。
2. 自动在客户端服务器之间协商格式
3. 引导客户端到别的服务器的能力
4. 而http可以由作者放置长效文档，访问者可以通过输入url，或者html内嵌url的引导，访问得到这个文档。

这些这些基本思想，成为http的种子。也许正是因为简单，才吸引了更多的人的投入，演变成如今这样红火的局面。

