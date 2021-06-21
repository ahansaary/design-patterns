function Member(name) {
  this.name = name
  this.chatroom = null
}

Member.prototype = {
  send: function (message, toMember) {
    this.chatroom.send(message, /*fromMember*/ this, toMember)
  },
  receive: function (message, fromMember) {
    console.log(`${fromMember.name} to ${this.name}: ${message}`)
  }
}

/**
 * Mediator Object
 */
function Chatroom() {
  this.members = {}
}

Chatroom.prototype = {
  addMember: function (member) {
    this.members[member.name] = member
    member.chatroom = this
  },

  // routing
  send: function (message, fromMember, toMember) {
    toMember.receive(message, fromMember)
  }
}

const chat = new Chatroom()

const ansary = new Member('Ansary')
const gaber = new Member('Gaber')
const majid = new Member('Majid')

chat.addMember(ansary)
chat.addMember(gaber)
chat.addMember(majid)

ansary.send(`Hey, Gaber`, gaber) // ansary => mediator => gaber
gaber.send(`What's up, Ansary`, ansary) // gaber => mediator => ansary
majid.send(`Gaber, are you ok?`, gaber) // majid => mediator => gaber
