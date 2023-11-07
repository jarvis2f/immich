import { IsBoolean, IsString } from 'class-validator';
import { Optional, ValidateUUID } from '../../domain.util';

export class UpdateAlbumDto {
  @Optional()
  @IsString()
  albumName?: string;

  @Optional()
  @IsString()
  description?: string;

  @IsBoolean()
  @Optional()
  isPrivate?: boolean;

  @ValidateUUID({ optional: true })
  albumThumbnailAssetId?: string;

  @Optional()
  @IsBoolean()
  isActivityEnabled?: boolean;
}
