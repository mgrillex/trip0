/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Patient } from "./Patient";
import { PatientCountArgs } from "./PatientCountArgs";
import { PatientFindManyArgs } from "./PatientFindManyArgs";
import { PatientFindUniqueArgs } from "./PatientFindUniqueArgs";
import { CreatePatientArgs } from "./CreatePatientArgs";
import { UpdatePatientArgs } from "./UpdatePatientArgs";
import { DeletePatientArgs } from "./DeletePatientArgs";
import { PatientService } from "../patient.service";
@graphql.Resolver(() => Patient)
export class PatientResolverBase {
  constructor(protected readonly service: PatientService) {}

  async _patientsMeta(
    @graphql.Args() args: PatientCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Patient])
  async patients(
    @graphql.Args() args: PatientFindManyArgs
  ): Promise<Patient[]> {
    return this.service.patients(args);
  }

  @graphql.Query(() => Patient, { nullable: true })
  async patient(
    @graphql.Args() args: PatientFindUniqueArgs
  ): Promise<Patient | null> {
    const result = await this.service.patient(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Patient)
  async createPatient(
    @graphql.Args() args: CreatePatientArgs
  ): Promise<Patient> {
    return await this.service.createPatient({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Patient)
  async updatePatient(
    @graphql.Args() args: UpdatePatientArgs
  ): Promise<Patient | null> {
    try {
      return await this.service.updatePatient({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Patient)
  async deletePatient(
    @graphql.Args() args: DeletePatientArgs
  ): Promise<Patient | null> {
    try {
      return await this.service.deletePatient(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
