@Talks = new Meteor.Collection("talks")
@DEBUG = true
if @DEBUG
  Meteor.my_now = new Date(Date.parse("2013-04-21T10:00:00.000Z"))

setStatuses = ->
  now = if @DEBUG then Meteor.my_now else new Date()
  @Talks.find({starts_at: {$lte: now}}).forEach (talk)->
    if talk.ends_at <= now
      @Talks.update({_id: talk._id}, {$set: {status: "Terminada"}})
    else if talk.starts_at <= now and talk.ends_at > now
      @Talks.update({_id: talk._id}, {$set: {status: "En Progreso"}})

  Meteor.my_now.setMinutes(Meteor.my_now.getMinutes()+15) if @DEBUG


Meteor.setInterval(setStatuses, 1000)



