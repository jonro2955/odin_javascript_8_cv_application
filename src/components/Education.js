import React, { Component } from "react";
// Run 'npm install uniqid' to use this package
import uniqid from "uniqid";

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formOn: false,
      formHeading: "",
      currentEditIndex: "",
      id: uniqid(),
      school: "",
      location: "",
      degree: "",
      gpa: "",
      start: "",
      end: "",
      schoolsList: [
        {
          id: uniqid(),
          school: "Awesome School",
          location: "Location",
          degree: "Your Credential",
          gpa: "3.5",
          start: "JAN 2020",
          end: "APR 2022",
        },
        {
          id: uniqid(),
          school: "Best School",
          location: "Location",
          degree: "Your Credential",
          gpa: "3.5",
          start: "JAN 2020",
          end: "APR 2022",
        },
      ],
    };
  }

  handleChangeName = (e) => {
    this.setState({
      school: e.target.value,
    });
  };

  handleChangeLocation = (e) => {
    this.setState({
      location: e.target.value,
    });
  };

  handleChangeDegree = (e) => {
    this.setState({
      degree: e.target.value,
    });
  };

  handleChangeGPA = (e) => {
    this.setState({
      gpa: e.target.value,
    });
  };

  handleChangeStartDate = (e) => {
    this.setState({
      start: e.target.value,
    });
  };

  handleChangeEndDate = (e) => {
    this.setState({
      end: e.target.value,
    });
  };

  onSubmitAdd = () => {
    let newSchool = {
      id: this.state.id,
      school: this.state.school,
      location: this.state.location,
      degree: this.state.degree,
      gpa: this.state.gpa,
      start: this.state.start,
      end: this.state.end,
    };
    this.setState({
      formOn: false,
      schoolsList: this.state.schoolsList.concat(newSchool),
      id: uniqid(),
      school: "",
      location: "",
      degree: "",
      gpa: "",
      start: "",
      end: "",
    });
  };

  toggleAdder = () => {
    this.setState((prevState) => ({
      formOn: !prevState.formOn,
      formHeading: "Add School",
      id: uniqid(),
      school: "",
      location: "",
      degree: "",
      gpa: "",
      start: "",
      end: "",
    }));
  };

  closeForm = () => {
    this.setState({
      formOn: false,
    });
  };

  toggleEditor = (e) => {
    let targetIndex;
    this.state.schoolsList.forEach((sch, i) => {
      if (sch.id === e.target.id) {
        targetIndex = i;
      }
    });
    this.setState((prevState) => ({
      formOn: !prevState.formOn,
      formHeading: "Edit School",
      currentEditIndex: targetIndex,
      id: this.state.schoolsList[targetIndex].id,
      school: this.state.schoolsList[targetIndex].school,
      location: this.state.schoolsList[targetIndex].location,
      degree: this.state.schoolsList[targetIndex].degree,
      gpa: this.state.schoolsList[targetIndex].gpa,
      start: this.state.schoolsList[targetIndex].start,
      end: this.state.schoolsList[targetIndex].end,
    }));
  };

  deleteEntry = (e) => {
    this.setState({
      schoolsList: this.state.schoolsList.filter((school) => school.id !== e.target.id),
    });
  };

  onSubmitEdit = (e) => {
    e.preventDefault();
    let newSchool = {
      id: this.state.id,
      school: this.state.school,
      location: this.state.location,
      degree: this.state.degree,
      gpa: this.state.gpa,
      start: this.state.start,
      end: this.state.end,
    };
    let copyOfSchoolsList = this.state.schoolsList;
    copyOfSchoolsList[this.state.currentEditIndex] = newSchool;
    this.setState({
      schoolsList: copyOfSchoolsList,
      formOn: false,
    });
  };

  render() {
    return (
      <div id="EducationComponent">
        <div id="EducationHeading" className="borderedHeading alignLeft">
          Education
        </div>
        <button className="editBtn" onClick={this.toggleAdder}>
          Add
        </button>
        {/* Render schools */}
        <div>
          {this.state.schoolsList.map((school) => {
            return (
              <div key={school.id} className="schoolEntry">
                <div className="dates">
                  {school.start} - {school.end}
                </div>
                <div className="schoolEntryColumn">
                  <div className="schoolName">{school.school}</div>
                  <div className="schoolLocation">{school.location}</div>
                </div>
                <div className="schoolEntryColumn">
                  <div className="schoolDegree">{school.degree}</div>
                  <div className="gpa">GPA: {school.gpa}</div>
                </div>
                <div className="entryEditBtnsDiv">
                  <button className="entryEditBtn" id={school.id} onClick={this.toggleEditor}>
                    Edit
                  </button>
                  <button className="entryEditBtn" id={school.id} onClick={this.deleteEntry}>
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        {/* Form */}
        {this.state.formOn && (
          <form
            className="formPosition2"
            onSubmit={
              this.state.formHeading === "Edit School" ? this.onSubmitEdit : this.onSubmitAdd
            }
          >
            <div className="adderFormHeading">{this.state.formHeading}</div>
            {/* school */}
            <label className="inputFieldLabel" htmlFor="schoolInput">
              School
            </label>
            <input
              id="schoolInput"
              school="school"
              type="text"
              maxLength="100"
              value={this.state.school}
              onChange={this.handleChangeName}
              autoFocus
            />
            {/* location */}
            <label className="inputFieldLabel" htmlFor="locationInput">
              Location
            </label>
            <input
              id="locationInput"
              school="location"
              type="text"
              maxLength="100"
              value={this.state.location}
              onChange={this.handleChangeLocation}
              required
            />
            {/* degree */}
            <label className="inputFieldLabel" htmlFor="degreeInput">
              Degree/Credential
            </label>
            <input
              id="degreeInput"
              school="degree"
              type="text"
              maxLength="100"
              value={this.state.degree}
              onChange={this.handleChangeDegree}
              required
            />
            {/* start date */}
            <label className="inputFieldLabel" htmlFor="startDate">
              Start Date
            </label>
            <input
              id="startInput"
              school="start"
              type="text"
              value={this.state.start}
              onChange={this.handleChangeStartDate}
            />
            {/* end date */}
            <label className="inputFieldLabel" htmlFor="endDate">
              End Date
            </label>
            <input
              id="endInput"
              school="end"
              type="text"
              value={this.state.end}
              onChange={this.handleChangeEndDate}
            />
            {/* gpa */}
            <label className="inputFieldLabel" htmlFor="gpaInput">
              GPA
            </label>
            <input
              id="gpaInput"
              school="gpa"
              type="text"
              maxLength="100"
              value={this.state.gpa}
              onChange={this.handleChangeGPA}
              required
            />
            {/* sumbit button */}
            <input type="submit" value="Submit" className="formBtn" />
            <button className="formBtn" onClick={this.toggleAdder}>
              Cancel
            </button>
          </form>
        )}
      </div>
    );
  }
}

export default Education;
