import React ,{Component} from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import BookListItem from "./BookListItem";

type Book ={
    ISBN: string;
    title: string;
    author: string;
    publisher: string;
    price: number;
    imgUrl:string;
    introduce:string;
}
//타입 지정해줌

  export type ClassComponentType = {

    books : Book[]

  }  //props의 속성 이름과 타입을 지정해줌

class BookList extends Component<ClassComponentType>{

    render(){

        const { books } = this.props;  // const books = this.props.books; 로도 가능

        return(

           <List>
            <ListItem>
               <BookListItem book = {books[0]}/>
            </ListItem>
            <ListItem>
                Item02
            </ListItem>
            <ListItem>
                Item03
            </ListItem>
           </List>

        )
    }
}

export default BookList;