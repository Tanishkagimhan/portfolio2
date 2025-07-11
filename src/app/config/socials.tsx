/*
 * Copyright 2025 Praveen Kumar
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Github, Linkedin, Mail, Facebook } from 'lucide-react';
import { Social } from '../types/types';

export const socials: Social[] = [
  {
    name: 'GitHub',
    icon: <Github size={20} />,
    url: 'https://github.com/Tanishkagimhan',
    color: '#6e7681',
  },
  {
    name: 'LinkedIn',
    icon: <Linkedin size={20} />,
    url: 'https://www.linkedin.com/in/tanishkagimhan/',
    color: '#0077B5',
  },
  {
    name: 'Email',
    icon: <Mail size={20} />,
    url: 'mailto:tanishkagimhan4@gmail.com',
    color: '#D44638',
  },
  {
    name: 'Facebook',
    icon: <Facebook size={20} />,
    url: 'https://www.facebook.com/share/16tXuCKHoe/?mibextid=wwXIfr',
    color: '#1DA1F2',
  },
];
