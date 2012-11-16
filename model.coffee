Talks = new Meteor.Collection("talks")
DEBUG = false
if DEBUG
  Meteor.my_now = new Date(Date.parse("2012-11-16T19:00:00.000Z"))

setStatuses = ->
  now = Meteor.my_now if DEBUG
  now = new Date()
  Talks.find({starts_at: {$lte: now}}).forEach (talk)->
    if talk.ends_at <= now
      Talks.update({_id: talk._id}, {$set: {status: "Terminada"}})
    else if talk.starts_at <= now and talk.ends_at > now
      Talks.update({_id: talk._id}, {$set: {status: "En Progreso"}})

  Meteor.my_now.setMinutes(Meteor.my_now.getMinutes()+15) if DEBUG

Meteor.setInterval(setStatuses, 1000)

