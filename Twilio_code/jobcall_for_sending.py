from twilio.rest import Client

#This is for sending message 

account_sid = 'AC28f715c4a0a0ab0feb3b4872844a51f1'
auth_token = 'de7e1d5e74085a1c225d444596cad7bd'
client = Client(account_sid, auth_token)

client.messages.create(
  to="+917767054416",
  from_="+15594237108",
  body="An employer is interested in you! Here is their information. Name: John Smith, Location: 73232, Phone Number: 2343343443, Needs: Cook on weekdays. "
)