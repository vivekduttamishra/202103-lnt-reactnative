import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import globalStyle from '../styles/global';
import Colors from '../styles/colors';
import LabeledInput from '../components/labeled-input';
import {addBook} from '../store/book-actions';
import {connect} from 'react-redux';

console.log('LabeledInput', LabeledInput);


class BookAddScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            author: '',
            price: 0,
            isbn: '',
            cover: ''
        };

    };

    save=()=>{
        console.log('saving',this.state);
        let book={...this.state};
        this.props.addBook(book);
        this.props.navigation.navigate('Book List');
    };

    render = () => {

        console.log(this.state);

        return (
            <View style={styles.container}>
                <Text style={styles.title}>Add New Book</Text>

                <LabeledInput label='ISBN Number'
                    value={this.state.isbn}
                    onChange={value => this.setState({ isbn: value })} />

                <LabeledInput label='Book Title'
                    value={this.state.title}
                    onChange={value => this.setState({ title: value })}
                />

                <LabeledInput label='Author Name'
                    value={this.state.author}
                    onChange={author => this.setState({ author: author })} />

                <LabeledInput label='Price'
                    value={this.state.price}
                    onChange={price => this.setState({ price: parseFloat(price) })} />

                <LabeledInput label='Cover Url'
                    value={this.state.cover}
                    onChange={value => this.setState({ cover:value })} />

                <Button title='Save' onPress={this.save} />
            </View>
        );
    };

}

const styles = StyleSheet.create({
    ...globalStyle,  //take all values from global and merge it here
   buttonStyle:{

   }

});


let mapReduxStateToProps = props=>({...props});

let actions={
    addBook
}


export default connect(mapReduxStateToProps,actions)(BookAddScreen);