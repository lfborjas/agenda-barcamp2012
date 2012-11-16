Template.talks.talks = ->
  Talks.find({}, {sort: {starts_at: 1}})
