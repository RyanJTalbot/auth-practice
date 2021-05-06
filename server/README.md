Server-side verification

If you wish to add Server side verification, Send the tokenId from client to server once onSuccess in Login component called.

So while handling authenticated routes, All requests from the client need to send the tokenId of the user in the header as Bearer token. At Server, once token received it must be verified either this tokenId

    belongs to the current application.
    Has it expired

You can do them manually but google suggests using their authentication library (Minimal effort required).

In the Server side (Here Node.js is used).

Install Google's official supported library google-auth-library package which is used to authenticate and verify OAuth apps.

//

Here, With our GOOGLE_CLIENT_ID sent it verifies whether this token belongs to our application or not. And it parses them and provides profile details in the getPayload function. And you can use them to access user data.
