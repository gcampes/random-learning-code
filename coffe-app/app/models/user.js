import DS from 'ember-data';

var User = DS.Model.extend({
  name: DS.attr('string')
});

User.reopenClass({
    FIXTURES: [
        {
            id: 1,
            name: "User 1"
        },
        {
            id: 2,
            name: "User 2"
        },
        {
            id: 3,
            name: "User 3"
        },
        {
            id: 4,
            name: "User 4"
        },
        {
            id: 5,
            name: "User 5"
        }
    ]
});

export default User;
