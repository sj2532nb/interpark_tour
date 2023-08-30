import React from 'react';
import Section1Component from './main1/Section1Component';
import Section2Component from './main1/Section2Component';
import Section3Component from './main1/Section3Component';
import Section4Component from './main1/Section4Component';
import Section5Component from './main1/Section5Component';
import Section6Component from './main1/Section6Component';
import Section7Component from './main1/Section7Component';
import Section8Component from './main1/Section8Component';
import Section9Component from './main1/Section9Component';

export default function Main1Component({setViewProduct}){
    return (
        <main id="Main1">
            <Section1Component/>
            <Section2Component/>
            <Section3Component/>
            <Section4Component setViewProduct={setViewProduct}/>
            <Section5Component setViewProduct={setViewProduct}/>
            <Section6Component/>
            <Section7Component/>
            <Section8Component/>
            <Section9Component/>
        </main>
    );
};