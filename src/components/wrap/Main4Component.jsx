import React from 'react';
import Section1Component from './main4/Section1Component';
import Section2Component from './main4/Section2Component';
import Section3Component from './main4/Section3Component';
import Section4Component from './main4/Section4Component';
import Section5Component from './main4/Section5Component';
import Section6Component from './main4/Section6Component';
import Section7Component from './main4/Section7Component';
import Section8Component from './main4/Section8Component';
import Section9Component from './main4/Section9Component';
import Section10Component from './main4/Section10Component';
import Section11Component from './main4/Section11Component';
import Section12Component from './main4/Section12Component';
import Section13Component from './main4/Section13Component';
import Section14Component from './main4/Section14Component';
import Section15Component from './main4/Section15Component';
import Section16Component from './main4/Section16Component';
import Section17Component from './main4/Section17Component';

export default function Main4Component({setViewProduct}){
    return (
        <main id="main4">
            <Section1Component/>
            <Section2Component/>
            <Section3Component/>
            <Section4Component/>
            <Section5Component setViewProduct={setViewProduct}/>
            <Section6Component setViewProduct={setViewProduct}/>
            <Section7Component setViewProduct={setViewProduct}/>
            <Section8Component setViewProduct={setViewProduct}/>
            <Section9Component setViewProduct={setViewProduct}/>
            <Section10Component setViewProduct={setViewProduct}/>
            <Section11Component setViewProduct={setViewProduct}/>
            <Section12Component setViewProduct={setViewProduct}/>
            <Section13Component setViewProduct={setViewProduct}/>
            <Section14Component setViewProduct={setViewProduct}/>
            <Section15Component setViewProduct={setViewProduct}/>
            <Section16Component setViewProduct={setViewProduct}/>
            <Section17Component/>
        </main>
    );
};