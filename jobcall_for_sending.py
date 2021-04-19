from twilio.rest import Client

#This is for sending message 

account_sid = 'AC28f715c4a0a0ab0feb3b4872844a51f1'
auth_token = '831f8ea3eb5c520bd90ce20b836600a3'
client = Client(account_sid, auth_token)

client.messages.create(
  to="+919307470764",
  from_="+15594237108",
  body="Can you please send over your details? "
)