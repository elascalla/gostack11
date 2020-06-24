import { container } from 'tsyringe';

import IStorageProvider from '@shared/container/providers/StoragedProvider/models/IStorageProvider';
import DiskStorageProvider from '@shared/container/providers/StoragedProvider/implementations/DiskStorageProvider';

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  DiskStorageProvider,
);
