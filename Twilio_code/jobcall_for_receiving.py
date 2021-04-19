import os
from twilio.rest import Client

#Give your account Id, SID and message ID to see the body of the message 
account_sid = 'AC28f715c4a0a0ab0feb3b4872844a51f1'
auth_token = 'de7e1d5e74085a1c225d444596cad7bd'
client = Client(account_sid, auth_token)

message = client.messages('SM9335666f6eb500614c036a117303231f').fetch()

print(message.body)