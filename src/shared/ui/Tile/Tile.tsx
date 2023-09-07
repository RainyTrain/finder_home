import { classNames } from '../../lib/classNames/classNames';
import { Icon } from '../Icon/Icon';
import cls from './Tile.module.scss';
import { TileItem } from './TileItems/TileItems';

interface TileProps {
  className?: string;
  item: TileItem;
}

export const Tile = (props: TileProps) => {
  const { className, item } = props;

  return (
    <div className={classNames(cls.Tile, {}, [className])}>
      <Icon Icon={item.icon} />
      <p className={cls.text}>{item.tileName}</p>
    </div>
  );
};
