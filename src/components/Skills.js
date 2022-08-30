import React, { Component } from 'react';

class Skills extends Component {
  constructor(props) {
    super(props);
    this.toggleEditor = this.toggleEditor.bind(this);
    this.state = {
      editorToggle: false,
      skill1: 'Detail Oriented',
      skill2: 'Listening',
      skill3: 'Communication',
      skill4: 'Time Management',
      skill5: 'Team Management',
      skill6: 'Creative Problem Solving',
      skill7: 'Adaptability',
      skill8: 'Social Media',
      skill9: '',
      skill10: '',
    };
  }

  toggleEditor = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      editorToggle: !prevState.editorToggle,
    }));
  };

  onChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div id='SkillsComponent'>
        <div id='skillsCenterBox'>
          <div id='skillsHeading'>Skills</div>
          <button className='editBtn' onClick={this.toggleEditor}>
            Edit
          </button>
          <div>{this.state.skill1}</div>
          <div>{this.state.skill2}</div>
          <div>{this.state.skill3}</div>
          <div>{this.state.skill4}</div>
          <div>{this.state.skill5}</div>
          <div>{this.state.skill6}</div>
          <div>{this.state.skill7}</div>
          <div>{this.state.skill8}</div>
          <div>{this.state.skill9}</div>
          <div>{this.state.skill10}</div>

          {/* form */}
          {this.state.editorToggle && (
            <form className='skillsForm' onSubmit={this.toggleEditor}>
              <label className='inputFieldLabel' htmlFor='skill1Input'>
                Skill 1
              </label>
              <input
                id='skill1Input'
                name='skill1'
                type='text'
                maxLength='100'
                htmlFor='skillsEditForm'
                value={this.state.skill1}
                onChange={this.onChange}
                autoFocus
              />
              <label className='inputFieldLabel' htmlFor='skill2Input'>
                Skill 2
              </label>
              <input
                id='skill2Input'
                name='skill2'
                type='text'
                maxLength='100'
                htmlFor='skillsEditForm'
                value={this.state.skill2}
                onChange={this.onChange}
              />
              <label className='inputFieldLabel' htmlFor='skill3Input'>
                Skill 3
              </label>
              <input
                id='skill3Input'
                name='skill3'
                type='text'
                maxLength='100'
                htmlFor='skillsEditForm'
                value={this.state.skill3}
                onChange={this.onChange}
              />
              <label className='inputFieldLabel' htmlFor='skill4Input'>
                Skill 4
              </label>
              <input
                id='skill4Input'
                name='skill4'
                type='text'
                maxLength='100'
                htmlFor='skillsEditForm'
                value={this.state.skill4}
                onChange={this.onChange}
              />
              <label className='inputFieldLabel' htmlFor='skill5Input'>
                Skill 5
              </label>
              <input
                id='skill5Input'
                name='skill5'
                type='text'
                maxLength='100'
                htmlFor='skillsEditForm'
                value={this.state.skill5}
                onChange={this.onChange}
              />
              <label className='inputFieldLabel' htmlFor='skill6Input'>
                Skill 6
              </label>
              <input
                id='skill6Input'
                name='skill6'
                type='text'
                maxLength='100'
                htmlFor='skillsEditForm'
                value={this.state.skill6}
                onChange={this.onChange}
              />
              <label className='inputFieldLabel' htmlFor='skill7Input'>
                Skill 7
              </label>
              <input
                id='skill7Input'
                name='skill7'
                type='text'
                maxLength='100'
                htmlFor='skillsEditForm'
                value={this.state.skill7}
                onChange={this.onChange}
              />
              <label className='inputFieldLabel' htmlFor='skill8Input'>
                Skill 8
              </label>
              <input
                id='skill8Input'
                name='skill8'
                type='text'
                maxLength='100'
                htmlFor='skillsEditForm'
                value={this.state.skill8}
                onChange={this.onChange}
              />
              <label className='inputFieldLabel' htmlFor='skill9Input'>
                Skill 9
              </label>
              <input
                id='skill9Input'
                name='skill9'
                type='text'
                maxLength='100'
                htmlFor='skillsEditForm'
                value={this.state.skill9}
                onChange={this.onChange}
              />

              <label className='inputFieldLabel' htmlFor='skill10Input'>
                Skill 10
              </label>
              <input
                id='skill10Input'
                name='skill10'
                type='text'
                maxLength='100'
                htmlFor='skillsEditForm'
                value={this.state.skill10}
                onChange={this.onChange}
              />
              <input type='submit' value='Done' className='formBtn' />
            </form>
          )}
        </div>
      </div>
    );
  }
}

export default Skills;
