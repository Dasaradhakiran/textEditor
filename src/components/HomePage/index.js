import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import './index.css'

import {Button, TextArea} from '../StyledComponents'

export default class HomePage extends Component {
  state = {
    textInput: '',
    boldActive: false,
    italicActive: false,
    underLineActive: false,
  }

  boldClick = () => {
    this.setState(prevState => ({boldActive: !prevState.boldActive}))
  }

  italicClick = () => {
    this.setState(prevState => ({italicActive: !prevState.italicActive}))
  }

  underLineClick = () => {
    this.setState(prevState => ({underLineActive: !prevState.underLineActive}))
  }

  onChangeText = event => {
    this.setState({textInput: event.target.value})
  }

  render() {
    const {boldActive, italicActive, underLineActive, textInput} = this.state

    return (
      <div className="main-cont">
        <div className="sub-cont">
          <div className="left-cont">
            <h1 className="text">Text Editor</h1>
            <img
              className="img-elem"
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </div>
          <div className="right-cont">
            <ul className="btn-cont">
              <li className="li-elem">
                <Button
                  outline
                  color={boldActive ? '#faff00' : '#f1f5f9'}
                  onClick={this.boldClick}
                  data-testid="bold"
                >
                  <VscBold className="btn-icon" />
                </Button>
              </li>
              <li className="li-elem">
                <Button
                  outline
                  color={italicActive ? '#faff00' : '#f1f5f9'}
                  onClick={this.italicClick}
                  data-testid="italic"
                >
                  <GoItalic className="btn-icon" />
                </Button>
              </li>
              <li className="li-elem">
                <Button
                  outline
                  color={underLineActive ? '#faff00' : '#f1f5f9'}
                  onClick={this.underLineClick}
                  data-testid="underline"
                >
                  <AiOutlineUnderline className="btn-icon" />
                </Button>
              </li>
            </ul>
            <TextArea
              cols={47}
              rows={22}
              value={textInput}
              onChange={this.onChangeText}
              name="postContent"
              boldActive={boldActive}
              italicActive={italicActive}
              underLineActive={underLineActive}
            />
          </div>
        </div>
      </div>
    )
  }
}
