// React;
import React from 'react';
import { Component } from 'react';
// Files
import Row from '../components/Row.jsx';

export default class StarWarsProfileContainer extends Component {
    state = {
        profiles: []
    }
    getUrls = () => {
        return new Promise((resolve, reject) => {
            const urls = [];
            for (let i = 1; i < 10; i++) {
                let promise = new Promise((resolve, reject) => {
                    fetch(`https://swapi.co/api/people/?page=${i}`)
                        .then(res => res.json())
                        .then(res => resolve(res))
                });
                urls.push(promise)
            }
            Promise.all(urls).then((values) => {
                let profile = values.reduce((accum, value) => {
                    value.results.forEach(ele => {
                        accum.push({
                            name: ele.name,
                            birth_year: ele.birth_year,
                            height: ele.height,
                            mass: ele.mass
                        })
                    })
                    return accum
                }, [])
                resolve(profile)
            })

        })
            .then(profile => this.setState(() => ({ profiles: profile })))
    }

    componentDidMount() {
        return new Promise((resolve, reject) => {
            const urls = [];
            for (let i = 1; i < 10; i++) {
                let promise = new Promise((resolve, reject) => {
                    fetch(`https://swapi.co/api/people/?page=${i}`)
                        .then(res => res.json())
                        .then(res => resolve(res))
                        .catch(error => error)
                });
                urls.push(promise)
            }
            Promise.all(urls).then((values) => {
                let profile = values.reduce((accum, value) => {
                    value.results.forEach(ele => {
                        accum.push({
                            name: ele.name,
                            birth_year: ele.birth_year,
                            height: ele.height,
                            mass: ele.mass
                        })
                    })
                    return accum
                }, [])
                resolve(profile)
            })

        })
            .then(profile => this.setState(() => ({ profiles: profile })))
            .catch(error => error)
    }
    render() {
        const rows = this.state.profiles.map((ele, ind) => {
            if (ind % 3 === 0) return <Row
                id={ind}
                key={'row' + ind}
                allProfiles={this.state.profiles} />
        })

        return (
            <div className='board-container'>
                <h1>Star Wars Character Profiles</h1>
                {rows}
            </div>
        )
    }

}