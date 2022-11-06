import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Navbar from './navbar';
import Figure from './figure';
import Carousel from './carousel';
import Cards from './cards';
import Cardgrp from './cardgrp';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Navbar />
    <Figure />
    <Carousel/>
    <br />
    <Cards/><Cardgrp/>
  </StrictMode>
);
