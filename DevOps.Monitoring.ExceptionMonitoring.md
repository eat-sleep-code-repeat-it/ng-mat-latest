# [Error Handling with Angular 8 - Tips and Best Practices](https://rollbar.com/blog/error-handling-with-angular-8-tips-and-best-practices/)

Handling errors properly is essential in building a robust application in Angular. Error handlers provide an opportunity to present friendly information to the user and collect important data for development. In today's age of advanced front-end websites, it's more important than ever to have an effective client-side solution for error handling.

An application that does not handle errors gracefully leaves its users confused and frustrated when the app suddenly breaks without explanation. Handling these errors correctly across an application greatly improves user experience. Collected data from the error handling can inform the development team about important issues that slipped past testing. This is why monitoring tools like Rollbar are so important.

In this article, we will compare several solutions for error handling in Angular apps. First, we will describe the traditional approaches using ErrorHandler and HttpClient. Then, we will show you a better solution using HttpInterceptor. We'll also show you how to use this interceptor to monitor and track errors centrally in Rollbar.

## The Shortcomings of console.log()
Beginners in JavaScript programming often start out using the console log because that is the default output in most development environments. Once you deploy your application to a production environment, you no longer have access to the console log. That's because the code is now running on the client browser. Unless you record the errors that clients experience in a centralized location, you won't have any visibility into them. In order to understand the user experience and how errors can affect it, you need to track errors centrally. That means not only tracking caught errors, but uncaught or run-time errors as well. In order to catch uncaught errors, you need to implement an error handler, which we will describe next.

## Handling Errors with HttpClient
By using Angular's HttpClient along with catchError from RxJS, we can easily write a function to handle errors within each service. HttpClient will also conveniently parse JSON responses and return a JavaScript object in the observable. There are two categories of errors which need to be handled differently:

Client-side: Network problems and front-end code errors. With HttpClient, these errors return ErrorEvent instances. Server-side: AJAX errors, user errors, back-end code errors, database errors, file system errors. With HttpClient, these errors return HTTP Error Responses.

By verifying if an error is an instance of ErrorEvent, we can figure out which type of error we have and handle it accordingly.

This is a good solution for just one service, but a real app contains numerous services which can all potentially throw errors. Unfortunately, this solution requires copying the handleError function across all services, which is a very serious anti-pattern in Angular development. If the way we handle errors needs to change, then we have to update every single handleError function across every service. This is counter-productive and can easily lead to more bugs. We need an efficient way to handle errors globally across the entire application. Fortunately, Angular supports this using HttpInterceptor.

## The Shortcomings of Angular's ErrorHandler
One traditional way of handling errors in Angular is to provide an ErrorHandler class. This class can be extended to create your own global error handler. This is also a useful way to handle all errors that occur, but is mostly useful for tracking error logs. For reference, you can check our tutorial on how to use ErrorHandler in Angular 2+.

By implementing error handling in HttpClient or HttpInterceptor, you can work directly with all HTTP requests in your application, providing you with the ability to transform the request, retry it, and more. ErrorHandler is useful for more generic error handling, however, HttpInterceptor provides a much more robust way to handle errors related to the server and network.

## A Better Solution with HttpInterceptor
HttpInterceptor was introduced with Angular 4.3.1. It provides a way to intercept HTTP requests and responses to transform or handle them before passing them along. This is a very useful tool in general; we can modify headers, add authentication tokens, modify data format, and more. By registering these interceptors in our root module, we can handle everything in the application, even with lazy loading implemented.

As you will see below, this makes our service much cleaner. Our application is now easier to maintain. As we create new services, they will automatically handle errors. We are even able to add the retry(1) function to our interceptor to retry all requests once before failing. Now that we have this in place, if we want to modify our error handling, we can simply go to this one file and update it globally across our application. This is definitely the "Angular way" to handle this problem.

Handling errors properly is essential in building a high-quality user experience. By providing readable messages to users, they can either understand why the error occurred or at least have an error code to give to your support team, which can help resolve issues that much faster. While ErrorHandler is a useful way to handle errors across an app, HttpInterceptor provides a much more robust solution for handling server and connection-related errors giving the ability to retry or return a richer error response to the client.

By setting up our application with Rollbar, we get real-time tracking on all errors that occur across our app as well as advanced features for monitoring, analyzing, and diagnosing. Rollbar's SDK for Angular makes it easy to integrate these features into the global HttpInterceptor to quickly improve the development and user experience of our application.