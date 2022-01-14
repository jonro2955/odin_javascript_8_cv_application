import React, { Component } from 'react';

class Skills extends Component {
  constructor(props) {
    super(props);
    this.toggleSkillsEditor = this.toggleSkillsEditor.bind(this);
    this.state = {
      editorToggle: false,
      skill1: 'Detail Oriented',
      skill2: 'Listening',
      skill3: 'Communication',
      skill4: 'Time Management',
      skill5: 'Team Management',
      skill6: 'Creative Problem Solving',
      skill7: 'Adaptability',
      skill8: 'Marketing Sense',
    };
  }

  toggleSkillsEditor = (e) => {
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
      <div id='Skills'>
        <div className='leftColumnHeading'>
          <div className='left-column-headings'>Skills</div>
          <button className='editBtn' onClick={this.toggleSkillsEditor}>
            Edit
          </button>
        </div>
        <div>{this.state.skill1}</div>
        <div>{this.state.skill2}</div>
        <div>{this.state.skill3}</div>
        <div>{this.state.skill4}</div>
        <div>{this.state.skill5}</div>
        <div>{this.state.skill6}</div>
        <div>{this.state.skill7}</div>
        <div>{this.state.skill8}</div>
        {this.state.editorToggle && (
          <form
            id='skillsEditForm'
            class='componentEditForm'
            onSubmit={this.toggleSkillsEditor}
          >
            <label htmlFor='skill1Input'>Skill 1</label>
            <input
              id='skill1Input'
              name='skill1'
              type='text'
              htmlFor='skillsEditForm'
              value={this.state.skill1}
              onChange={this.onChange}
              autoFocus
            />
            <label htmlFor='skill1Input'>Skill 2</label>
            <input
              id='skill2Input'
              name='skill2'
              type='text'
              htmlFor='skillsEditForm'
              value={this.state.skill2}
              onChange={this.onChange}
            />
            <label htmlFor='skill1Input'>Skill 3</label>
            <input
              id='skill3Input'
              name='skill3'
              type='text'
              htmlFor='skillsEditForm'
              value={this.state.skill3}
              onChange={this.onChange}
            />
            <label htmlFor='skill1Input'>Skill 4</label>
            <input
              id='skill4Input'
              name='skill4'
              type='text'
              htmlFor='skillsEditForm'
              value={this.state.skill4}
              onChange={this.onChange}
            />
            <label htmlFor='skill1Input'>Skill 5</label>
            <input
              id='skill5Input'
              name='skill5'
              type='text'
              htmlFor='skillsEditForm'
              value={this.state.skill5}
              onChange={this.onChange}
            />
            <label htmlFor='skill1Input'>Skill 6</label>
            <input
              id='skill6Input'
              name='skill6'
              type='text'
              htmlFor='skillsEditForm'
              value={this.state.skill6}
              onChange={this.onChange}
            />
            <label htmlFor='skill1Input'>Skill 7</label>
            <input
              id='skill7Input'
              name='skill7'
              type='text'
              htmlFor='skillsEditForm'
              value={this.state.skill7}
              onChange={this.onChange}
            />
            <label htmlFor='skill1Input'>Skill 8</label>
            <input
              id='skill8Input'
              name='skill8'
              type='text'
              htmlFor='skillsEditForm'
              value={this.state.skill8}
              onChange={this.onChange}
            />

            <input
              type='submit'
              value='Done'
              class='doneBtn'
              style={{ fontWeight: 'bold', backgroundColor: 'orange' }}
            />
          </form>
        )}
      </div>
    );
  }
}

export default Skills;
