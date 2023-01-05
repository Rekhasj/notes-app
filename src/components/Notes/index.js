import {useState} from 'react'
import {v4 as uuid4} from 'uuid'

import {
  MainContainer,
  Heading,
  InputCard,
  InputTitle,
  TextAreaInput,
  Button,
  Image,
  NoteItemContainer,
  EmptyDetails,
  ListContainer,
  EmptyHeading,
} from './styledComponents'
import NoteItem from '../NoteItem'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [list, setList] = useState([])

  const onChangeTitle = event => {
    setTitle(event.target.value)
  }

  const onChangeNote = event => {
    setNote(event.target.value)
  }

  const onAddNote = event => {
    event.preventDefault()

    const newList = {
      id: uuid4(),
      title,
      note,
    }
    setList(prevState => [...prevState, newList])
    setTitle('')
    setNote('')
  }

  console.log(list)

  return (
    <MainContainer>
      <Heading>Notes</Heading>
      <InputCard onSubmit={onAddNote}>
        <InputTitle
          placeholder="Title"
          onChange={onChangeTitle}
          value={title}
        />
        <TextAreaInput
          placeholder="Take a Note...."
          onChange={onChangeNote}
          value={note}
        />
        <Button type="submit">Add</Button>
      </InputCard>

      {list.length === 0 ? (
        <NoteItemContainer>
          <Image
            alt="notes empty"
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
          />
          <EmptyHeading>No Notes Yet</EmptyHeading>
          <EmptyDetails>Notes you add will appear here</EmptyDetails>
        </NoteItemContainer>
      ) : (
        <ListContainer>
          {list.map(eachList => (
            <NoteItem key={eachList.id} listDetails={eachList} />
          ))}
        </ListContainer>
      )}
    </MainContainer>
  )
}

export default Notes
