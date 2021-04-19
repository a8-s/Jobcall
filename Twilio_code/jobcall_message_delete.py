import os
from twilio.rest import Client
#This code is for deleting one message from our log
#Give your account Id, SID and message ID to see the body of the message 
account_sid = 'AC28f715c4a0a0ab0feb3b4872844a51f1'
auth_token = 'de7e1d5e74085a1c225d444596cad7bd'
client = Client(account_sid, auth_token)
#Give message sid
message = client.messages('SM61e10af890d04507897a518a07df7a20').delete()

#print(message.body)