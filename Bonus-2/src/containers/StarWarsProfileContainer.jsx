// React;
import React from 'react';
import { Component } from 'react';
// Files;
import Profile from '../components/Profile.jsx';

export default class StarWarsProfileContainer extends Component {
    state = {
        profiles: []
    };

    // gets number of pages;
    getPageCount = () => {
        return fetch(`https://swapi.co/api/people/?page=1`)
            .then(res => res.json())
            .then(pageOneObject => Math.ceil(pageOneObject.count / 10))
            .catch(error => console.log(error));
    };
    // takes in number of pages;
    // fetches each page and gets all profile data in an array;
    // then filters through it and sent to setttingState;
    getCharacterProfiles = (numberOfPages) => {
        const profiles = [];
        for (let i = 1; i <= numberOfPages; i++) {
            profiles.push(fetch(`https://swapi.co/api/people/?page=${i}`)
                .then(res => res.json())
                .catch(err => new Error(err)))
        };
        return Promise.all(profiles).then(values => {
            return values.reduce((accum, page) => {
                page.results.forEach(profile => {
                    accum.push({
                        name: profile.name,
                        birth_year: profile.birth_year,
                        height: profile.height,
                        mass: profile.mass
                    });
                });
                return accum
            }, []);
        });
    };
    // sets state with new filtered prfile data array;
    settingState = (filteredProfileData) => {
        this.setState(() => ({ profiles: filteredProfileData }));
    };

    allCharacterProfileData = async () => {
        let numOfPages = await this.getPageCount();
        let getAllProfiles = await this.getCharacterProfiles(numOfPages);
        let settingCorrectData = await this.settingState(getAllProfiles);
        return settingCorrectData;
    };
    componentDidMount() {
        this.allCharacterProfileData();
    };
    render() {
        const profiles = this.state.profiles.map((profile, ind) => {
            return <Profile
                id={ind}
                key={'Profile' + ind}
                profileData={profile} />
        });
        return (
            <div>
                <h1 className='profile-table-container__h1'>
                    Star Wars Character Profiles
                </h1>
                <div className='profile-table-container'>
                    {profiles}
                </div>
            </div>
        );
    };
};