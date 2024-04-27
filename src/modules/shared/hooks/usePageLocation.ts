import { useMemo} from 'react';
import { useLocation } from 'react-router-dom';

enum Location {
  Phones = '/phones',
  Tablets = '/tablets',
  Accessories = '/accessories',
}

const usePageLocation = () => {

  const { pathname } = useLocation();

  const pageLocation = useMemo(() => {
    switch (pathname) {
      case Location.Phones:
        return 'Mobile phones';

      case Location.Tablets:
        return 'Tablets';

      case Location.Accessories:
        return 'Accessories';
      default:
        return '';
    }
  }, [pathname]);

  return {pageLocation};
};

export default usePageLocation;