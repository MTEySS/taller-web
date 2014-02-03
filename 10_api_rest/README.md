# Diseñando e implementando una API rest

#TODO

Recursos:

ejemplos de API: http://microformats.org/wiki/rest/urls

OK
http://net.tutsplus.com/tutorials/other/a-beginners-introduction-to-http-and-rest/

http://soabits.blogspot.com.ar/2013/05/error-handling-considerations-and-best.html

https://es.wikipedia.org/wiki/HTTP

https://es.wikipedia.org/wiki/REST

REST API tutorial
http://www.restapitutorial.com/lessons/whatisrest.html#


What is REST?
http://rest.elkstein.org/



How I Explained REST to My Wife
http://www.looah.com/source/view/2284

Como le expliqué REST a mi esposa
http://blog.tordek.com.ar/2008/03/como-le-explique-rest-a-mi-esposa/

--

to check:

rest

http://net.tutsplus.com/tutorials/other/a-beginners-introduction-to-http-and-rest/

http://stackoverflow.com/questions/2001773/understanding-rest-verbs-error-codes-and-authentication

errors in a rest service

http://soabits.blogspot.com.ar/2013/05/error-handling-considerations-and-best.html

http

Hypertext Transfer Protocol (HTTP) is the life of the web. It’s used every
time you transfer a document, or make an AJAX request.

In HTTP, there are two different roles: server and client. In general, the
client always initiates the conversation; the server replies.

HTTP is text based

HTTP messages are made of a header and a body.

Spying HTTP at Work

curl -v google.com

URLS

URLs are how you identify the things that you want to operate on.

HTTP Verbs
Each request specifies a certain HTTP verb, or method, in the request header

GET
GET is the simplest type of HTTP request method; the one that browsers use
each time you click a link or type a URL into the address bar.


Classifying HTTP Methods
Safe and unsafe methods:
safe methods are those that never modify resources. The only safe methods,
from the four listed above, is GET. The others are unsafe, because they may
result in a modification of the resources.
Idempotent methods:


the HTTP client and HTTP server exchange information about resources
identified by URLs.


Response Codes


200 ...



http://rest.elkstein.org/2008/02/what-is-rest.html

REST stands for Representational State Transfer. (It is sometimes spelled
"ReST".)

REST (REpresentational State Transfer) is a simple stateless architecture
that generally runs over HTTP.


REST is an architecture style for designing networked applications. The
idea is that, rather than using complex mechanisms such as CORBA, RPC or
SOAP to connect between machines, simple HTTP is used to make calls between
machines.

In many ways, the World Wide Web itself, based on HTTP, can be viewed as a
REST-based architecture.


REST uses HTTP for all four CRUD (Create/Read/Update/Delete) operations.


REST is an "architectural style" that basically exploits the existing
technology and protocols of the Web, including HTTP (Hypertext Transfer
Protocol) and XML. REST is simpler to use than the well-known SOAP (Simple
Object Access Protocol)

the necessary state to handle the request is contained within the request
itself, whether as part of the URI, query-string parameters, body, or
headers. The URI uniquely identifies the resource and the body contains the
state (or state change) of that resource. Then after the server does it's
processing, the appropriate state, or the piece(s) of state that matter,
are communicated back to the client via headers, status and response body.


 In REST, the client must include all information for the server to fulfill
the request, resending state as necessary if that state must span multiple
requests. Statelessness enables greater scalability since the server does
not have to maintain, update or communicate that session state.
Additionally, load balancers don't have to worry about session affinity for
stateless systems.

The uniform interface separates clients from servers. This separation of
concerns means that, for example, clients are not concerned with data
storage, which remains internal to each server, so that the portability of
client code is improved. Servers are not concerned with the user interface
or user state, so that servers can be simpler and more scalable. Servers
and clients may also be replaced and developed independently, as long as
the interface is not altered.


REST is not a "standard". There will never be a W3C recommendataion for
REST, for example. And while there are REST programming frameworks, working
with REST is so simple that you can often "roll your own" with standard
library features in languages like Perl, Java, or C#.

ejemplos de una API!!!

http://microformats.org/wiki/rest/urls

http://weblog.jamisbuck.org/2007/2/5/nesting-resources


