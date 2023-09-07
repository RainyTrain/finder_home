import { classNames } from 'shared/lib/classNames/classNames';
import { Tile } from 'shared/ui/Tile/Tile';
import { tileItems } from 'shared/ui/Tile/TileItems/TileItems';
import cls from './TilesSection.module.scss';

interface TilesSectionProps {
  className?: string;
  isClose: boolean;
}

const finderLink = 'https://www.finder.com.au/';

export const TilesSection = ({ className, isClose }: TilesSectionProps) => {
  const tiles = tileItems.map((item) => (
    <a href={finderLink}>
      <Tile item={item} />
    </a>
  ));

  return (
    <section className={classNames(cls.TilesSection, { [cls.isClose]: isClose }, [className])}>
      {tiles}
    </section>
  );
};
