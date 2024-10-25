import { Post } from './Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import style from './App.module.css';

import './global.css';

export function App() {

  return (
    <div>
    <Header/>
    
      <div className={style.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Flávio Rodrigues Leal" 
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi cum unde officiis reprehenderit quas! Culpa, minima! Itaque labore possimus dolores pariatur quaerat aliquam perspiciatis sit! Eveniet fuga quod minus saepe." 
          />
          <Post 
            author="Gabriel Buzzi" 
            content="Um novo post muito legal" 
          />
        </main>
      </div>
    </div>
  )
}
