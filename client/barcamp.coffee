Template.talks.talks = ->
  Talks.find({}, {sort: {starts_at: 1}})

Template.talks.events
  "click td.talk-title": (e)->
    td = $(e.currentTarget)
    title = td.children(".talk-original-title")
    form  = td.children(".edit-talk-form")

    title.hide()
    form.show()

  "click .update-talk-title": (e)->
    button = $(e.currentTarget)
    td = button.closest("td.talk-title")
    Talks.update({_id: button.data("id")}, {$set: {title: button.siblings(".talk-new-title").val() }})
    button.hide()
    td.children(".talk-original-title").show()




