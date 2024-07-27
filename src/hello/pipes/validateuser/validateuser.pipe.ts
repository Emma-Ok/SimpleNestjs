import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import { parse } from 'path';

//Validar la info, transformarla y enviarla

@Injectable()
export class ValidateuserPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('value', value)

    const ageNumber = parseInt(value.age.toString(), 10);
    if (isNaN(ageNumber)) {
      throw new HttpException('Age is not a number', HttpStatus.BAD_REQUEST);
    }

    return { ...value, age: ageNumber };
  }
}
