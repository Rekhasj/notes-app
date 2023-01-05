// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const Heading = styled.h1`
  color: #4c63b6;
  font-size: 20px;
  font-family: 'Bree Serif';
`
export const InputCard = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  box-shadow: 1px 1px 1px 1px #aab8c8;
  width: 40%;
  height: 40%;
  padding: 20px;
`
export const InputTitle = styled.input`
  color: #475569;
  border: none;
`
export const TextAreaInput = styled.textarea`
  color: #475569;
  border: none;
  background-color: transparent;
`

export const Button = styled.button`
  align-self: flex-end;
  background-color: #4c63b6;
  color: #ffffff;
  border: none;
  font-size: 15px;
  padding: 8px 15px;
`
export const NoteItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

export const Image = styled.img`
  height: 100px;
  width: 100px;
`
export const EmptyDetails = styled.p`
  font-size: 15px;
  font-family: 'Roboto';
`

export const EmptyHeading = styled.h1`
  font-size: 20px;
  font-family: 'Roboto';
`
export const ListContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  width: 50%;
`
