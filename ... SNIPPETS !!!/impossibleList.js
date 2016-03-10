/* COMPOSER SECTION OF CONTAINER THAT RETURNS LIST & CALCULATED % VALUE */
// ...
// export const composer = ({context}, onData) => {
//   const {Meteor, Collections} = context();
//   if (Meteor.subscribe('items.list').ready()) {
    const items = Collections.Items.find({}, {sort: {due: -1}}).fetch();
    const totalItems = Collections.Items.find().count();
    const completedItems = Collections.Items.find({complete: true}).count();
    const percentage = Math.round((completedItems / totalItems) * 100);
    onData(null, {items, percentage});
//   }
// };
// ...

/* ITEM MARKER WITHIN COMPONENT */
// ...
// class Item extends React.Component {
	// render() {
		const {item, currentDate} = this.props;
    // return (
			// ...
			<Input ref="complete" type="checkbox" label="Complete?" onChange={this.markComplete.bind(this)}/>
      // ...
	}

	markComplete() {
		const complete = this.refs.complete.getChecked(); //getChecked is not defined
		const itemId = this.props.item._id;
		Meteor.call('items.markComplete', complete, itemId);
	}
};
//
// export default Item;

/* GOES WITH server/methods/items.js */
// ...
// ...export default function () {
//   Meteor.methods...
//   ...
  Meteor.methods({
      'items.markComplete'(complete, itemId) {
        check(complete, Boolean);
        check(itemId, String);
        Items.update(itemId, {
          $set: {complete: complete}
        });
      }
  });
