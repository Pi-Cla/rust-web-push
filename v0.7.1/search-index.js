var searchIndex={};
searchIndex["web_push"] = {"doc":"Web Push","i":[[3,"WebPushClient","web_push","An async client for sending the notification payload.",null,null],[3,"SubscriptionInfo","","Client info for sending the notification. Maps the values…",null,null],[12,"endpoint","","The endpoint URI for sending the notification.",0,null],[12,"keys","","The encryption key and secret for payload encryption.",0,null],[3,"SubscriptionKeys","","Encryption keys from the client.",null,null],[12,"p256dh","","The public key",1,null],[12,"auth","","Authentication secret",1,null],[3,"WebPushMessage","","Everything needed to send a push notification to the user.",null,null],[12,"gcm_key","","When not using VAPID, certain browsers need a Firebase…",2,null],[12,"endpoint","","The endpoint URI where to send the payload.",2,null],[12,"ttl","","Time to live, how long the message should wait in the…",2,null],[12,"payload","","The encrypted request payload, if sending any data.",2,null],[12,"service","","The service type where to connect. Firebase when not using…",2,null],[3,"WebPushMessageBuilder","","The main class for creating a notification payload.",null,null],[3,"WebPushPayload","","The push content payload, already in an encrypted form.",null,null],[12,"content","","Encrypted content data.",3,null],[12,"crypto_headers","","Headers depending on the authorization scheme and…",3,null],[12,"content_encoding","","The encryption standard.",3,null],[3,"VapidSignature","","A struct representing a VAPID signature. Should be…",null,null],[12,"auth_t","","The signature",4,null],[12,"auth_k","","The public key",4,null],[3,"VapidSignatureBuilder","","A VAPID signature builder for generating an optional…",null,null],[4,"WebPushError","","",null,null],[13,"Unspecified","","An unknown error happened encrypting the message,",5,null],[13,"Unauthorized","","Please provide valid credentials to send the notification",5,null],[13,"BadRequest","","Request was badly formed",5,null],[13,"ServerError","","Contains an optional `Duration`, until the user can retry…",5,null],[13,"NotImplemented","","The feature is not implemented yet",5,null],[13,"InvalidUri","","The provided URI is invalid",5,null],[13,"EndpointNotValid","","The URL specified is no longer valid and should no longer…",5,null],[13,"EndpointNotFound","","The URL specified is invalid and should not be used again",5,null],[13,"PayloadTooLarge","","Maximum allowed payload size is 3800 characters",5,null],[13,"TlsError","","Could not initialize a TLS connection",5,null],[13,"SslError","","Error in SSL signing",5,null],[13,"IoError","","Error in reading a file",5,null],[13,"InvalidPackageName","","Make sure the message was addressed to a registration…",5,null],[13,"InvalidTtl","","The TTL value provided was not valid or was not provided",5,null],[13,"MissingCryptoKeys","","The request was missing required crypto keys",5,null],[13,"InvalidCryptoKeys","","One or more of the crypto key elements are invalid.",5,null],[13,"InvalidResponse","","Corrupted response data",5,null],[13,"Other","","",5,null],[4,"ContentEncoding","","",null,null],[13,"AesGcm","","",6,null],[13,"Aes128Gcm","","",6,null],[11,"new","","",7,[[],["webpushclient"]]],[11,"send","","Sends a notification. Never times out.",7,[[["self"],["webpushmessage"]]]],[11,"short_description","","",5,[[["self"]],["str"]]],[11,"new","","A constructor function to create a new `SubscriptionInfo`,…",0,[[["s"]],["subscriptioninfo"]]],[11,"new","","Creates a builder for generating the web push payload.",8,[[["subscriptioninfo"]],[["webpushmessagebuilder"],["webpusherror"],["result",["webpushmessagebuilder","webpusherror"]]]]],[11,"set_ttl","","How long the server should keep the message if it cannot…",8,[[["self"],["u32"]]]],[11,"set_gcm_key","","For Google's push service, one must provide an API key…",8,[[["self"],["str"]]]],[11,"set_vapid_signature","","Add a VAPID signature to the request. To be generated with…",8,[[["vapidsignature"],["self"]]]],[11,"set_payload","","If set, the client will get content in the notification.…",8,[[["contentencoding"],["self"]]]],[11,"build","","Builds and if set, encrypts the payload. Any errors will…",8,[[],[["result",["webpushmessage","webpusherror"]],["webpushmessage"],["webpusherror"]]]],[11,"from_pem","","Creates a new builder from a PEM formatted private key.",9,[[["read"],["subscriptioninfo"]],[["webpusherror"],["result",["vapidsignaturebuilder","webpusherror"]],["vapidsignaturebuilder"]]]],[11,"from_der","","Creates a new builder from a DER formatted private key.",9,[[["read"],["subscriptioninfo"]],[["webpusherror"],["result",["vapidsignaturebuilder","webpusherror"]],["vapidsignaturebuilder"]]]],[11,"add_claim","","Add a claim to the signature. Claims `aud` and `exp` are…",9,[[["self"],["str"],["v"]]]],[11,"build","","Builds a signature to be used in WebPushMessageBuilder.",9,[[],[["vapidsignature"],["result",["vapidsignature","webpusherror"]],["webpusherror"]]]],[11,"from","","",7,[[["t"]],["t"]]],[11,"into","","",7,[[],["u"]]],[11,"try_from","","",7,[[["u"]],["result"]]],[11,"try_into","","",7,[[],["result"]]],[11,"borrow","","",7,[[["self"]],["t"]]],[11,"borrow_mut","","",7,[[["self"]],["t"]]],[11,"type_id","","",7,[[["self"]],["typeid"]]],[11,"from","","",0,[[["t"]],["t"]]],[11,"into","","",0,[[],["u"]]],[11,"try_from","","",0,[[["u"]],["result"]]],[11,"try_into","","",0,[[],["result"]]],[11,"borrow","","",0,[[["self"]],["t"]]],[11,"borrow_mut","","",0,[[["self"]],["t"]]],[11,"type_id","","",0,[[["self"]],["typeid"]]],[11,"erased_serialize","","",0,[[["serializer"],["self"]],[["error"],["result",["ok","error"]],["ok"]]]],[11,"from","","",1,[[["t"]],["t"]]],[11,"into","","",1,[[],["u"]]],[11,"try_from","","",1,[[["u"]],["result"]]],[11,"try_into","","",1,[[],["result"]]],[11,"borrow","","",1,[[["self"]],["t"]]],[11,"borrow_mut","","",1,[[["self"]],["t"]]],[11,"type_id","","",1,[[["self"]],["typeid"]]],[11,"erased_serialize","","",1,[[["serializer"],["self"]],[["error"],["result",["ok","error"]],["ok"]]]],[11,"from","","",2,[[["t"]],["t"]]],[11,"into","","",2,[[],["u"]]],[11,"try_from","","",2,[[["u"]],["result"]]],[11,"try_into","","",2,[[],["result"]]],[11,"borrow","","",2,[[["self"]],["t"]]],[11,"borrow_mut","","",2,[[["self"]],["t"]]],[11,"type_id","","",2,[[["self"]],["typeid"]]],[11,"from","","",8,[[["t"]],["t"]]],[11,"into","","",8,[[],["u"]]],[11,"try_from","","",8,[[["u"]],["result"]]],[11,"try_into","","",8,[[],["result"]]],[11,"borrow","","",8,[[["self"]],["t"]]],[11,"borrow_mut","","",8,[[["self"]],["t"]]],[11,"type_id","","",8,[[["self"]],["typeid"]]],[11,"from","","",3,[[["t"]],["t"]]],[11,"into","","",3,[[],["u"]]],[11,"try_from","","",3,[[["u"]],["result"]]],[11,"try_into","","",3,[[],["result"]]],[11,"borrow","","",3,[[["self"]],["t"]]],[11,"borrow_mut","","",3,[[["self"]],["t"]]],[11,"type_id","","",3,[[["self"]],["typeid"]]],[11,"from","","",4,[[["t"]],["t"]]],[11,"into","","",4,[[],["u"]]],[11,"try_from","","",4,[[["u"]],["result"]]],[11,"try_into","","",4,[[],["result"]]],[11,"borrow","","",4,[[["self"]],["t"]]],[11,"borrow_mut","","",4,[[["self"]],["t"]]],[11,"type_id","","",4,[[["self"]],["typeid"]]],[11,"from","","",9,[[["t"]],["t"]]],[11,"into","","",9,[[],["u"]]],[11,"try_from","","",9,[[["u"]],["result"]]],[11,"try_into","","",9,[[],["result"]]],[11,"borrow","","",9,[[["self"]],["t"]]],[11,"borrow_mut","","",9,[[["self"]],["t"]]],[11,"type_id","","",9,[[["self"]],["typeid"]]],[11,"from","","",5,[[["t"]],["t"]]],[11,"into","","",5,[[],["u"]]],[11,"to_string","","",5,[[["self"]],["string"]]],[11,"try_from","","",5,[[["u"]],["result"]]],[11,"try_into","","",5,[[],["result"]]],[11,"borrow","","",5,[[["self"]],["t"]]],[11,"borrow_mut","","",5,[[["self"]],["t"]]],[11,"type_id","","",5,[[["self"]],["typeid"]]],[11,"from","","",6,[[["t"]],["t"]]],[11,"into","","",6,[[],["u"]]],[11,"try_from","","",6,[[["u"]],["result"]]],[11,"try_into","","",6,[[],["result"]]],[11,"borrow","","",6,[[["self"]],["t"]]],[11,"borrow_mut","","",6,[[["self"]],["t"]]],[11,"type_id","","",6,[[["self"]],["typeid"]]],[11,"from","","",5,[[["jsonerror"]],["webpusherror"]]],[11,"from","","",5,[[["fromutf8error"]],["webpusherror"]]],[11,"from","","",5,[[["invaliduri"]],["webpusherror"]]],[11,"from","","",5,[[["unspecified"]],["webpusherror"]]],[11,"from","","",5,[[["error"]],["self"]]],[11,"from","","",5,[[["error"]],["webpusherror"]]],[11,"from","","",5,[[["ioerror"]],["webpusherror"]]],[11,"from","","",5,[[["errorstack"]],["webpusherror"]]],[11,"from","","",5,[[["decodeerror"]],["webpusherror"]]],[11,"eq","","",5,[[["webpusherror"],["self"]],["bool"]]],[11,"ne","","",5,[[["webpusherror"],["self"]],["bool"]]],[11,"eq","","",3,[[["webpushpayload"],["self"]],["bool"]]],[11,"ne","","",3,[[["webpushpayload"],["self"]],["bool"]]],[11,"fmt","","",5,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",1,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",0,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",3,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",2,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",4,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",5,[[["formatter"],["self"]],["result"]]],[11,"description","","",5,[[["self"]],["str"]]],[11,"cause","","",5,[[["self"]],[["error"],["option",["error"]]]]],[11,"serialize","","",1,[[["self"],["__s"]],["result"]]],[11,"serialize","","",0,[[["self"],["__s"]],["result"]]],[11,"deserialize","","",1,[[["__d"]],["result"]]],[11,"deserialize","","",0,[[["__d"]],["result"]]]],"p":[[3,"SubscriptionInfo"],[3,"SubscriptionKeys"],[3,"WebPushMessage"],[3,"WebPushPayload"],[3,"VapidSignature"],[4,"WebPushError"],[4,"ContentEncoding"],[3,"WebPushClient"],[3,"WebPushMessageBuilder"],[3,"VapidSignatureBuilder"]]};
addSearchOptions(searchIndex);initSearch(searchIndex);