import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Page } from 'widgets/Page/Page';
import { TilesSection } from 'widgets/TilesSection/TilesSection';
import cls from './MainPage.module.scss';

interface MainPageProps {
  className?: string;
}

const MainPage = ({ className }: MainPageProps) => {
  const [isClose, setIsClose] = useState<boolean>(false);

  const openHandler = () => {
    setIsClose((prev) => !prev);
  };

  return (
    <Page className={classNames(cls.MainPage, {}, [className])}>
      <div className={cls.title}>
        <h1>Join 2 million+ Australians finding better</h1>
        <p>
          Finder's team of 40+ experts will help you find the right choices in over 100 categories
        </p>
      </div>
      <TilesSection isClose={isClose} />
      <Button isOpen={isClose} setOpen={openHandler}>
        {isClose ? 'Show less categories ↑' : ' Show more categories ↓'}
      </Button>
    </Page>
  );
};

export default MainPage;
