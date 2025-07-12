
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model UserSession
 * 
 */
export type UserSession = $Result.DefaultSelection<Prisma.$UserSessionPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model VendorService
 * 
 */
export type VendorService = $Result.DefaultSelection<Prisma.$VendorServicePayload>
/**
 * Model AppointMent
 * 
 */
export type AppointMent = $Result.DefaultSelection<Prisma.$AppointMentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AccountType: {
  Customer: 'Customer',
  Vendor: 'Vendor',
  Admin: 'Admin'
};

export type AccountType = (typeof AccountType)[keyof typeof AccountType]


export const BusinessType: {
  BeautyProfessional: 'BeautyProfessional',
  LocalProducts: 'LocalProducts'
};

export type BusinessType = (typeof BusinessType)[keyof typeof BusinessType]

}

export type AccountType = $Enums.AccountType

export const AccountType: typeof $Enums.AccountType

export type BusinessType = $Enums.BusinessType

export const BusinessType: typeof $Enums.BusinessType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more UserSessions
 * const userSessions = await prisma.userSession.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more UserSessions
   * const userSessions = await prisma.userSession.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.userSession`: Exposes CRUD operations for the **UserSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSessions
    * const userSessions = await prisma.userSession.findMany()
    * ```
    */
  get userSession(): Prisma.UserSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vendorService`: Exposes CRUD operations for the **VendorService** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VendorServices
    * const vendorServices = await prisma.vendorService.findMany()
    * ```
    */
  get vendorService(): Prisma.VendorServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appointMent`: Exposes CRUD operations for the **AppointMent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AppointMents
    * const appointMents = await prisma.appointMent.findMany()
    * ```
    */
  get appointMent(): Prisma.AppointMentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    UserSession: 'UserSession',
    Account: 'Account',
    VendorService: 'VendorService',
    AppointMent: 'AppointMent'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "userSession" | "account" | "vendorService" | "appointMent"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      UserSession: {
        payload: Prisma.$UserSessionPayload<ExtArgs>
        fields: Prisma.UserSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>
          }
          findFirst: {
            args: Prisma.UserSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>
          }
          findMany: {
            args: Prisma.UserSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>[]
          }
          create: {
            args: Prisma.UserSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>
          }
          createMany: {
            args: Prisma.UserSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>[]
          }
          delete: {
            args: Prisma.UserSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>
          }
          update: {
            args: Prisma.UserSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>
          }
          deleteMany: {
            args: Prisma.UserSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>[]
          }
          upsert: {
            args: Prisma.UserSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>
          }
          aggregate: {
            args: Prisma.UserSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSession>
          }
          groupBy: {
            args: Prisma.UserSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSessionCountArgs<ExtArgs>
            result: $Utils.Optional<UserSessionCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      VendorService: {
        payload: Prisma.$VendorServicePayload<ExtArgs>
        fields: Prisma.VendorServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VendorServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VendorServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorServicePayload>
          }
          findFirst: {
            args: Prisma.VendorServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VendorServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorServicePayload>
          }
          findMany: {
            args: Prisma.VendorServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorServicePayload>[]
          }
          create: {
            args: Prisma.VendorServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorServicePayload>
          }
          createMany: {
            args: Prisma.VendorServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VendorServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorServicePayload>[]
          }
          delete: {
            args: Prisma.VendorServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorServicePayload>
          }
          update: {
            args: Prisma.VendorServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorServicePayload>
          }
          deleteMany: {
            args: Prisma.VendorServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VendorServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VendorServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorServicePayload>[]
          }
          upsert: {
            args: Prisma.VendorServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorServicePayload>
          }
          aggregate: {
            args: Prisma.VendorServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVendorService>
          }
          groupBy: {
            args: Prisma.VendorServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<VendorServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.VendorServiceCountArgs<ExtArgs>
            result: $Utils.Optional<VendorServiceCountAggregateOutputType> | number
          }
        }
      }
      AppointMent: {
        payload: Prisma.$AppointMentPayload<ExtArgs>
        fields: Prisma.AppointMentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppointMentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointMentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppointMentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointMentPayload>
          }
          findFirst: {
            args: Prisma.AppointMentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointMentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppointMentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointMentPayload>
          }
          findMany: {
            args: Prisma.AppointMentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointMentPayload>[]
          }
          create: {
            args: Prisma.AppointMentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointMentPayload>
          }
          createMany: {
            args: Prisma.AppointMentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppointMentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointMentPayload>[]
          }
          delete: {
            args: Prisma.AppointMentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointMentPayload>
          }
          update: {
            args: Prisma.AppointMentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointMentPayload>
          }
          deleteMany: {
            args: Prisma.AppointMentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppointMentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppointMentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointMentPayload>[]
          }
          upsert: {
            args: Prisma.AppointMentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointMentPayload>
          }
          aggregate: {
            args: Prisma.AppointMentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointMent>
          }
          groupBy: {
            args: Prisma.AppointMentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointMentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppointMentCountArgs<ExtArgs>
            result: $Utils.Optional<AppointMentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    userSession?: UserSessionOmit
    account?: AccountOmit
    vendorService?: VendorServiceOmit
    appointMent?: AppointMentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AccountCountOutputType
   */

  export type AccountCountOutputType = {
    sessions: number
    services: number
    appointmentsAsUser: number
    appointmentsAsVendor: number
  }

  export type AccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | AccountCountOutputTypeCountSessionsArgs
    services?: boolean | AccountCountOutputTypeCountServicesArgs
    appointmentsAsUser?: boolean | AccountCountOutputTypeCountAppointmentsAsUserArgs
    appointmentsAsVendor?: boolean | AccountCountOutputTypeCountAppointmentsAsVendorArgs
  }

  // Custom InputTypes
  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountCountOutputType
     */
    select?: AccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSessionWhereInput
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VendorServiceWhereInput
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountAppointmentsAsUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointMentWhereInput
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountAppointmentsAsVendorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointMentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model UserSession
   */

  export type AggregateUserSession = {
    _count: UserSessionCountAggregateOutputType | null
    _min: UserSessionMinAggregateOutputType | null
    _max: UserSessionMaxAggregateOutputType | null
  }

  export type UserSessionMinAggregateOutputType = {
    id: string | null
    accountId: string | null
    expiration: Date | null
    fcmToken: string | null
    refreshToken: string | null
    createdAt: Date | null
    lastSignedIn: Date | null
  }

  export type UserSessionMaxAggregateOutputType = {
    id: string | null
    accountId: string | null
    expiration: Date | null
    fcmToken: string | null
    refreshToken: string | null
    createdAt: Date | null
    lastSignedIn: Date | null
  }

  export type UserSessionCountAggregateOutputType = {
    id: number
    accountId: number
    expiration: number
    fcmToken: number
    refreshToken: number
    createdAt: number
    lastSignedIn: number
    _all: number
  }


  export type UserSessionMinAggregateInputType = {
    id?: true
    accountId?: true
    expiration?: true
    fcmToken?: true
    refreshToken?: true
    createdAt?: true
    lastSignedIn?: true
  }

  export type UserSessionMaxAggregateInputType = {
    id?: true
    accountId?: true
    expiration?: true
    fcmToken?: true
    refreshToken?: true
    createdAt?: true
    lastSignedIn?: true
  }

  export type UserSessionCountAggregateInputType = {
    id?: true
    accountId?: true
    expiration?: true
    fcmToken?: true
    refreshToken?: true
    createdAt?: true
    lastSignedIn?: true
    _all?: true
  }

  export type UserSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSession to aggregate.
     */
    where?: UserSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSessions to fetch.
     */
    orderBy?: UserSessionOrderByWithRelationInput | UserSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSessions
    **/
    _count?: true | UserSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSessionMaxAggregateInputType
  }

  export type GetUserSessionAggregateType<T extends UserSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSession[P]>
      : GetScalarType<T[P], AggregateUserSession[P]>
  }




  export type UserSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSessionWhereInput
    orderBy?: UserSessionOrderByWithAggregationInput | UserSessionOrderByWithAggregationInput[]
    by: UserSessionScalarFieldEnum[] | UserSessionScalarFieldEnum
    having?: UserSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSessionCountAggregateInputType | true
    _min?: UserSessionMinAggregateInputType
    _max?: UserSessionMaxAggregateInputType
  }

  export type UserSessionGroupByOutputType = {
    id: string
    accountId: string
    expiration: Date
    fcmToken: string | null
    refreshToken: string | null
    createdAt: Date
    lastSignedIn: Date | null
    _count: UserSessionCountAggregateOutputType | null
    _min: UserSessionMinAggregateOutputType | null
    _max: UserSessionMaxAggregateOutputType | null
  }

  type GetUserSessionGroupByPayload<T extends UserSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSessionGroupByOutputType[P]>
            : GetScalarType<T[P], UserSessionGroupByOutputType[P]>
        }
      >
    >


  export type UserSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    expiration?: boolean
    fcmToken?: boolean
    refreshToken?: boolean
    createdAt?: boolean
    lastSignedIn?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSession"]>

  export type UserSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    expiration?: boolean
    fcmToken?: boolean
    refreshToken?: boolean
    createdAt?: boolean
    lastSignedIn?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSession"]>

  export type UserSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    expiration?: boolean
    fcmToken?: boolean
    refreshToken?: boolean
    createdAt?: boolean
    lastSignedIn?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSession"]>

  export type UserSessionSelectScalar = {
    id?: boolean
    accountId?: boolean
    expiration?: boolean
    fcmToken?: boolean
    refreshToken?: boolean
    createdAt?: boolean
    lastSignedIn?: boolean
  }

  export type UserSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountId" | "expiration" | "fcmToken" | "refreshToken" | "createdAt" | "lastSignedIn", ExtArgs["result"]["userSession"]>
  export type UserSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }
  export type UserSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }
  export type UserSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }

  export type $UserSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSession"
    objects: {
      account: Prisma.$AccountPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountId: string
      expiration: Date
      fcmToken: string | null
      refreshToken: string | null
      createdAt: Date
      lastSignedIn: Date | null
    }, ExtArgs["result"]["userSession"]>
    composites: {}
  }

  type UserSessionGetPayload<S extends boolean | null | undefined | UserSessionDefaultArgs> = $Result.GetResult<Prisma.$UserSessionPayload, S>

  type UserSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSessionCountAggregateInputType | true
    }

  export interface UserSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSession'], meta: { name: 'UserSession' } }
    /**
     * Find zero or one UserSession that matches the filter.
     * @param {UserSessionFindUniqueArgs} args - Arguments to find a UserSession
     * @example
     * // Get one UserSession
     * const userSession = await prisma.userSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSessionFindUniqueArgs>(args: SelectSubset<T, UserSessionFindUniqueArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSessionFindUniqueOrThrowArgs} args - Arguments to find a UserSession
     * @example
     * // Get one UserSession
     * const userSession = await prisma.userSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionFindFirstArgs} args - Arguments to find a UserSession
     * @example
     * // Get one UserSession
     * const userSession = await prisma.userSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSessionFindFirstArgs>(args?: SelectSubset<T, UserSessionFindFirstArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionFindFirstOrThrowArgs} args - Arguments to find a UserSession
     * @example
     * // Get one UserSession
     * const userSession = await prisma.userSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSessions
     * const userSessions = await prisma.userSession.findMany()
     * 
     * // Get first 10 UserSessions
     * const userSessions = await prisma.userSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userSessionWithIdOnly = await prisma.userSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserSessionFindManyArgs>(args?: SelectSubset<T, UserSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSession.
     * @param {UserSessionCreateArgs} args - Arguments to create a UserSession.
     * @example
     * // Create one UserSession
     * const UserSession = await prisma.userSession.create({
     *   data: {
     *     // ... data to create a UserSession
     *   }
     * })
     * 
     */
    create<T extends UserSessionCreateArgs>(args: SelectSubset<T, UserSessionCreateArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSessions.
     * @param {UserSessionCreateManyArgs} args - Arguments to create many UserSessions.
     * @example
     * // Create many UserSessions
     * const userSession = await prisma.userSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSessionCreateManyArgs>(args?: SelectSubset<T, UserSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSessions and returns the data saved in the database.
     * @param {UserSessionCreateManyAndReturnArgs} args - Arguments to create many UserSessions.
     * @example
     * // Create many UserSessions
     * const userSession = await prisma.userSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserSessions and only return the `id`
     * const userSessionWithIdOnly = await prisma.userSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, UserSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserSession.
     * @param {UserSessionDeleteArgs} args - Arguments to delete one UserSession.
     * @example
     * // Delete one UserSession
     * const UserSession = await prisma.userSession.delete({
     *   where: {
     *     // ... filter to delete one UserSession
     *   }
     * })
     * 
     */
    delete<T extends UserSessionDeleteArgs>(args: SelectSubset<T, UserSessionDeleteArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSession.
     * @param {UserSessionUpdateArgs} args - Arguments to update one UserSession.
     * @example
     * // Update one UserSession
     * const userSession = await prisma.userSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSessionUpdateArgs>(args: SelectSubset<T, UserSessionUpdateArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSessions.
     * @param {UserSessionDeleteManyArgs} args - Arguments to filter UserSessions to delete.
     * @example
     * // Delete a few UserSessions
     * const { count } = await prisma.userSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSessionDeleteManyArgs>(args?: SelectSubset<T, UserSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSessions
     * const userSession = await prisma.userSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSessionUpdateManyArgs>(args: SelectSubset<T, UserSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSessions and returns the data updated in the database.
     * @param {UserSessionUpdateManyAndReturnArgs} args - Arguments to update many UserSessions.
     * @example
     * // Update many UserSessions
     * const userSession = await prisma.userSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserSessions and only return the `id`
     * const userSessionWithIdOnly = await prisma.userSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, UserSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserSession.
     * @param {UserSessionUpsertArgs} args - Arguments to update or create a UserSession.
     * @example
     * // Update or create a UserSession
     * const userSession = await prisma.userSession.upsert({
     *   create: {
     *     // ... data to create a UserSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSession we want to update
     *   }
     * })
     */
    upsert<T extends UserSessionUpsertArgs>(args: SelectSubset<T, UserSessionUpsertArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionCountArgs} args - Arguments to filter UserSessions to count.
     * @example
     * // Count the number of UserSessions
     * const count = await prisma.userSession.count({
     *   where: {
     *     // ... the filter for the UserSessions we want to count
     *   }
     * })
    **/
    count<T extends UserSessionCountArgs>(
      args?: Subset<T, UserSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserSessionAggregateArgs>(args: Subset<T, UserSessionAggregateArgs>): Prisma.PrismaPromise<GetUserSessionAggregateType<T>>

    /**
     * Group by UserSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSessionGroupByArgs['orderBy'] }
        : { orderBy?: UserSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSession model
   */
  readonly fields: UserSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserSession model
   */
  interface UserSessionFieldRefs {
    readonly id: FieldRef<"UserSession", 'String'>
    readonly accountId: FieldRef<"UserSession", 'String'>
    readonly expiration: FieldRef<"UserSession", 'DateTime'>
    readonly fcmToken: FieldRef<"UserSession", 'String'>
    readonly refreshToken: FieldRef<"UserSession", 'String'>
    readonly createdAt: FieldRef<"UserSession", 'DateTime'>
    readonly lastSignedIn: FieldRef<"UserSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserSession findUnique
   */
  export type UserSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * Filter, which UserSession to fetch.
     */
    where: UserSessionWhereUniqueInput
  }

  /**
   * UserSession findUniqueOrThrow
   */
  export type UserSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * Filter, which UserSession to fetch.
     */
    where: UserSessionWhereUniqueInput
  }

  /**
   * UserSession findFirst
   */
  export type UserSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * Filter, which UserSession to fetch.
     */
    where?: UserSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSessions to fetch.
     */
    orderBy?: UserSessionOrderByWithRelationInput | UserSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSessions.
     */
    cursor?: UserSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSessions.
     */
    distinct?: UserSessionScalarFieldEnum | UserSessionScalarFieldEnum[]
  }

  /**
   * UserSession findFirstOrThrow
   */
  export type UserSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * Filter, which UserSession to fetch.
     */
    where?: UserSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSessions to fetch.
     */
    orderBy?: UserSessionOrderByWithRelationInput | UserSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSessions.
     */
    cursor?: UserSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSessions.
     */
    distinct?: UserSessionScalarFieldEnum | UserSessionScalarFieldEnum[]
  }

  /**
   * UserSession findMany
   */
  export type UserSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * Filter, which UserSessions to fetch.
     */
    where?: UserSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSessions to fetch.
     */
    orderBy?: UserSessionOrderByWithRelationInput | UserSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSessions.
     */
    cursor?: UserSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSessions.
     */
    skip?: number
    distinct?: UserSessionScalarFieldEnum | UserSessionScalarFieldEnum[]
  }

  /**
   * UserSession create
   */
  export type UserSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSession.
     */
    data: XOR<UserSessionCreateInput, UserSessionUncheckedCreateInput>
  }

  /**
   * UserSession createMany
   */
  export type UserSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSessions.
     */
    data: UserSessionCreateManyInput | UserSessionCreateManyInput[]
  }

  /**
   * UserSession createManyAndReturn
   */
  export type UserSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * The data used to create many UserSessions.
     */
    data: UserSessionCreateManyInput | UserSessionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSession update
   */
  export type UserSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSession.
     */
    data: XOR<UserSessionUpdateInput, UserSessionUncheckedUpdateInput>
    /**
     * Choose, which UserSession to update.
     */
    where: UserSessionWhereUniqueInput
  }

  /**
   * UserSession updateMany
   */
  export type UserSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSessions.
     */
    data: XOR<UserSessionUpdateManyMutationInput, UserSessionUncheckedUpdateManyInput>
    /**
     * Filter which UserSessions to update
     */
    where?: UserSessionWhereInput
    /**
     * Limit how many UserSessions to update.
     */
    limit?: number
  }

  /**
   * UserSession updateManyAndReturn
   */
  export type UserSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * The data used to update UserSessions.
     */
    data: XOR<UserSessionUpdateManyMutationInput, UserSessionUncheckedUpdateManyInput>
    /**
     * Filter which UserSessions to update
     */
    where?: UserSessionWhereInput
    /**
     * Limit how many UserSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSession upsert
   */
  export type UserSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSession to update in case it exists.
     */
    where: UserSessionWhereUniqueInput
    /**
     * In case the UserSession found by the `where` argument doesn't exist, create a new UserSession with this data.
     */
    create: XOR<UserSessionCreateInput, UserSessionUncheckedCreateInput>
    /**
     * In case the UserSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSessionUpdateInput, UserSessionUncheckedUpdateInput>
  }

  /**
   * UserSession delete
   */
  export type UserSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * Filter which UserSession to delete.
     */
    where: UserSessionWhereUniqueInput
  }

  /**
   * UserSession deleteMany
   */
  export type UserSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSessions to delete
     */
    where?: UserSessionWhereInput
    /**
     * Limit how many UserSessions to delete.
     */
    limit?: number
  }

  /**
   * UserSession without action
   */
  export type UserSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    rating: Decimal | null
  }

  export type AccountSumAggregateOutputType = {
    rating: Decimal | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phoneNumber: string | null
    password: string | null
    avatarUrl: string | null
    rating: Decimal | null
    type: $Enums.AccountType | null
    isSuspended: boolean | null
    businessName: string | null
    businessType: $Enums.BusinessType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phoneNumber: string | null
    password: string | null
    avatarUrl: string | null
    rating: Decimal | null
    type: $Enums.AccountType | null
    isSuspended: boolean | null
    businessName: string | null
    businessType: $Enums.BusinessType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phoneNumber: number
    password: number
    avatarUrl: number
    rating: number
    type: number
    isSuspended: number
    businessName: number
    businessType: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    rating?: true
  }

  export type AccountSumAggregateInputType = {
    rating?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phoneNumber?: true
    password?: true
    avatarUrl?: true
    rating?: true
    type?: true
    isSuspended?: true
    businessName?: true
    businessType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phoneNumber?: true
    password?: true
    avatarUrl?: true
    rating?: true
    type?: true
    isSuspended?: true
    businessName?: true
    businessType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phoneNumber?: true
    password?: true
    avatarUrl?: true
    rating?: true
    type?: true
    isSuspended?: true
    businessName?: true
    businessType?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    name: string
    email: string | null
    phoneNumber: string
    password: string | null
    avatarUrl: string | null
    rating: Decimal
    type: $Enums.AccountType
    isSuspended: boolean
    businessName: string | null
    businessType: $Enums.BusinessType | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    password?: boolean
    avatarUrl?: boolean
    rating?: boolean
    type?: boolean
    isSuspended?: boolean
    businessName?: boolean
    businessType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sessions?: boolean | Account$sessionsArgs<ExtArgs>
    services?: boolean | Account$servicesArgs<ExtArgs>
    appointmentsAsUser?: boolean | Account$appointmentsAsUserArgs<ExtArgs>
    appointmentsAsVendor?: boolean | Account$appointmentsAsVendorArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    password?: boolean
    avatarUrl?: boolean
    rating?: boolean
    type?: boolean
    isSuspended?: boolean
    businessName?: boolean
    businessType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    password?: boolean
    avatarUrl?: boolean
    rating?: boolean
    type?: boolean
    isSuspended?: boolean
    businessName?: boolean
    businessType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    password?: boolean
    avatarUrl?: boolean
    rating?: boolean
    type?: boolean
    isSuspended?: boolean
    businessName?: boolean
    businessType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phoneNumber" | "password" | "avatarUrl" | "rating" | "type" | "isSuspended" | "businessName" | "businessType" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | Account$sessionsArgs<ExtArgs>
    services?: boolean | Account$servicesArgs<ExtArgs>
    appointmentsAsUser?: boolean | Account$appointmentsAsUserArgs<ExtArgs>
    appointmentsAsVendor?: boolean | Account$appointmentsAsVendorArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      sessions: Prisma.$UserSessionPayload<ExtArgs>[]
      services: Prisma.$VendorServicePayload<ExtArgs>[]
      appointmentsAsUser: Prisma.$AppointMentPayload<ExtArgs>[]
      appointmentsAsVendor: Prisma.$AppointMentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string | null
      phoneNumber: string
      password: string | null
      avatarUrl: string | null
      rating: Prisma.Decimal
      type: $Enums.AccountType
      isSuspended: boolean
      businessName: string | null
      businessType: $Enums.BusinessType | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends Account$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, Account$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    services<T extends Account$servicesArgs<ExtArgs> = {}>(args?: Subset<T, Account$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    appointmentsAsUser<T extends Account$appointmentsAsUserArgs<ExtArgs> = {}>(args?: Subset<T, Account$appointmentsAsUserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointMentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    appointmentsAsVendor<T extends Account$appointmentsAsVendorArgs<ExtArgs> = {}>(args?: Subset<T, Account$appointmentsAsVendorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointMentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly name: FieldRef<"Account", 'String'>
    readonly email: FieldRef<"Account", 'String'>
    readonly phoneNumber: FieldRef<"Account", 'String'>
    readonly password: FieldRef<"Account", 'String'>
    readonly avatarUrl: FieldRef<"Account", 'String'>
    readonly rating: FieldRef<"Account", 'Decimal'>
    readonly type: FieldRef<"Account", 'AccountType'>
    readonly isSuspended: FieldRef<"Account", 'Boolean'>
    readonly businessName: FieldRef<"Account", 'String'>
    readonly businessType: FieldRef<"Account", 'BusinessType'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account.sessions
   */
  export type Account$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    where?: UserSessionWhereInput
    orderBy?: UserSessionOrderByWithRelationInput | UserSessionOrderByWithRelationInput[]
    cursor?: UserSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSessionScalarFieldEnum | UserSessionScalarFieldEnum[]
  }

  /**
   * Account.services
   */
  export type Account$servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorService
     */
    select?: VendorServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorService
     */
    omit?: VendorServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorServiceInclude<ExtArgs> | null
    where?: VendorServiceWhereInput
    orderBy?: VendorServiceOrderByWithRelationInput | VendorServiceOrderByWithRelationInput[]
    cursor?: VendorServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VendorServiceScalarFieldEnum | VendorServiceScalarFieldEnum[]
  }

  /**
   * Account.appointmentsAsUser
   */
  export type Account$appointmentsAsUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointMent
     */
    select?: AppointMentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointMent
     */
    omit?: AppointMentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointMentInclude<ExtArgs> | null
    where?: AppointMentWhereInput
    orderBy?: AppointMentOrderByWithRelationInput | AppointMentOrderByWithRelationInput[]
    cursor?: AppointMentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointMentScalarFieldEnum | AppointMentScalarFieldEnum[]
  }

  /**
   * Account.appointmentsAsVendor
   */
  export type Account$appointmentsAsVendorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointMent
     */
    select?: AppointMentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointMent
     */
    omit?: AppointMentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointMentInclude<ExtArgs> | null
    where?: AppointMentWhereInput
    orderBy?: AppointMentOrderByWithRelationInput | AppointMentOrderByWithRelationInput[]
    cursor?: AppointMentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointMentScalarFieldEnum | AppointMentScalarFieldEnum[]
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model VendorService
   */

  export type AggregateVendorService = {
    _count: VendorServiceCountAggregateOutputType | null
    _avg: VendorServiceAvgAggregateOutputType | null
    _sum: VendorServiceSumAggregateOutputType | null
    _min: VendorServiceMinAggregateOutputType | null
    _max: VendorServiceMaxAggregateOutputType | null
  }

  export type VendorServiceAvgAggregateOutputType = {
    price: Decimal | null
  }

  export type VendorServiceSumAggregateOutputType = {
    price: Decimal | null
  }

  export type VendorServiceMinAggregateOutputType = {
    id: string | null
    name: string | null
    imageUrl: string | null
    price: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
    vendorId: string | null
  }

  export type VendorServiceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    imageUrl: string | null
    price: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
    vendorId: string | null
  }

  export type VendorServiceCountAggregateOutputType = {
    id: number
    name: number
    imageUrl: number
    price: number
    createdAt: number
    updatedAt: number
    vendorId: number
    _all: number
  }


  export type VendorServiceAvgAggregateInputType = {
    price?: true
  }

  export type VendorServiceSumAggregateInputType = {
    price?: true
  }

  export type VendorServiceMinAggregateInputType = {
    id?: true
    name?: true
    imageUrl?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    vendorId?: true
  }

  export type VendorServiceMaxAggregateInputType = {
    id?: true
    name?: true
    imageUrl?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    vendorId?: true
  }

  export type VendorServiceCountAggregateInputType = {
    id?: true
    name?: true
    imageUrl?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    vendorId?: true
    _all?: true
  }

  export type VendorServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VendorService to aggregate.
     */
    where?: VendorServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VendorServices to fetch.
     */
    orderBy?: VendorServiceOrderByWithRelationInput | VendorServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VendorServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VendorServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VendorServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VendorServices
    **/
    _count?: true | VendorServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VendorServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VendorServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VendorServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VendorServiceMaxAggregateInputType
  }

  export type GetVendorServiceAggregateType<T extends VendorServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateVendorService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVendorService[P]>
      : GetScalarType<T[P], AggregateVendorService[P]>
  }




  export type VendorServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VendorServiceWhereInput
    orderBy?: VendorServiceOrderByWithAggregationInput | VendorServiceOrderByWithAggregationInput[]
    by: VendorServiceScalarFieldEnum[] | VendorServiceScalarFieldEnum
    having?: VendorServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VendorServiceCountAggregateInputType | true
    _avg?: VendorServiceAvgAggregateInputType
    _sum?: VendorServiceSumAggregateInputType
    _min?: VendorServiceMinAggregateInputType
    _max?: VendorServiceMaxAggregateInputType
  }

  export type VendorServiceGroupByOutputType = {
    id: string
    name: string
    imageUrl: string | null
    price: Decimal
    createdAt: Date
    updatedAt: Date
    vendorId: string
    _count: VendorServiceCountAggregateOutputType | null
    _avg: VendorServiceAvgAggregateOutputType | null
    _sum: VendorServiceSumAggregateOutputType | null
    _min: VendorServiceMinAggregateOutputType | null
    _max: VendorServiceMaxAggregateOutputType | null
  }

  type GetVendorServiceGroupByPayload<T extends VendorServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VendorServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VendorServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VendorServiceGroupByOutputType[P]>
            : GetScalarType<T[P], VendorServiceGroupByOutputType[P]>
        }
      >
    >


  export type VendorServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    imageUrl?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vendorId?: boolean
    vendor?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vendorService"]>

  export type VendorServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    imageUrl?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vendorId?: boolean
    vendor?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vendorService"]>

  export type VendorServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    imageUrl?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vendorId?: boolean
    vendor?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vendorService"]>

  export type VendorServiceSelectScalar = {
    id?: boolean
    name?: boolean
    imageUrl?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vendorId?: boolean
  }

  export type VendorServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "imageUrl" | "price" | "createdAt" | "updatedAt" | "vendorId", ExtArgs["result"]["vendorService"]>
  export type VendorServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | AccountDefaultArgs<ExtArgs>
  }
  export type VendorServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | AccountDefaultArgs<ExtArgs>
  }
  export type VendorServiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | AccountDefaultArgs<ExtArgs>
  }

  export type $VendorServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VendorService"
    objects: {
      vendor: Prisma.$AccountPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      imageUrl: string | null
      price: Prisma.Decimal
      createdAt: Date
      updatedAt: Date
      vendorId: string
    }, ExtArgs["result"]["vendorService"]>
    composites: {}
  }

  type VendorServiceGetPayload<S extends boolean | null | undefined | VendorServiceDefaultArgs> = $Result.GetResult<Prisma.$VendorServicePayload, S>

  type VendorServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VendorServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VendorServiceCountAggregateInputType | true
    }

  export interface VendorServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VendorService'], meta: { name: 'VendorService' } }
    /**
     * Find zero or one VendorService that matches the filter.
     * @param {VendorServiceFindUniqueArgs} args - Arguments to find a VendorService
     * @example
     * // Get one VendorService
     * const vendorService = await prisma.vendorService.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VendorServiceFindUniqueArgs>(args: SelectSubset<T, VendorServiceFindUniqueArgs<ExtArgs>>): Prisma__VendorServiceClient<$Result.GetResult<Prisma.$VendorServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VendorService that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VendorServiceFindUniqueOrThrowArgs} args - Arguments to find a VendorService
     * @example
     * // Get one VendorService
     * const vendorService = await prisma.vendorService.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VendorServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, VendorServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VendorServiceClient<$Result.GetResult<Prisma.$VendorServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VendorService that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorServiceFindFirstArgs} args - Arguments to find a VendorService
     * @example
     * // Get one VendorService
     * const vendorService = await prisma.vendorService.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VendorServiceFindFirstArgs>(args?: SelectSubset<T, VendorServiceFindFirstArgs<ExtArgs>>): Prisma__VendorServiceClient<$Result.GetResult<Prisma.$VendorServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VendorService that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorServiceFindFirstOrThrowArgs} args - Arguments to find a VendorService
     * @example
     * // Get one VendorService
     * const vendorService = await prisma.vendorService.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VendorServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, VendorServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__VendorServiceClient<$Result.GetResult<Prisma.$VendorServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VendorServices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VendorServices
     * const vendorServices = await prisma.vendorService.findMany()
     * 
     * // Get first 10 VendorServices
     * const vendorServices = await prisma.vendorService.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vendorServiceWithIdOnly = await prisma.vendorService.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VendorServiceFindManyArgs>(args?: SelectSubset<T, VendorServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VendorService.
     * @param {VendorServiceCreateArgs} args - Arguments to create a VendorService.
     * @example
     * // Create one VendorService
     * const VendorService = await prisma.vendorService.create({
     *   data: {
     *     // ... data to create a VendorService
     *   }
     * })
     * 
     */
    create<T extends VendorServiceCreateArgs>(args: SelectSubset<T, VendorServiceCreateArgs<ExtArgs>>): Prisma__VendorServiceClient<$Result.GetResult<Prisma.$VendorServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VendorServices.
     * @param {VendorServiceCreateManyArgs} args - Arguments to create many VendorServices.
     * @example
     * // Create many VendorServices
     * const vendorService = await prisma.vendorService.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VendorServiceCreateManyArgs>(args?: SelectSubset<T, VendorServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VendorServices and returns the data saved in the database.
     * @param {VendorServiceCreateManyAndReturnArgs} args - Arguments to create many VendorServices.
     * @example
     * // Create many VendorServices
     * const vendorService = await prisma.vendorService.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VendorServices and only return the `id`
     * const vendorServiceWithIdOnly = await prisma.vendorService.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VendorServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, VendorServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VendorService.
     * @param {VendorServiceDeleteArgs} args - Arguments to delete one VendorService.
     * @example
     * // Delete one VendorService
     * const VendorService = await prisma.vendorService.delete({
     *   where: {
     *     // ... filter to delete one VendorService
     *   }
     * })
     * 
     */
    delete<T extends VendorServiceDeleteArgs>(args: SelectSubset<T, VendorServiceDeleteArgs<ExtArgs>>): Prisma__VendorServiceClient<$Result.GetResult<Prisma.$VendorServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VendorService.
     * @param {VendorServiceUpdateArgs} args - Arguments to update one VendorService.
     * @example
     * // Update one VendorService
     * const vendorService = await prisma.vendorService.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VendorServiceUpdateArgs>(args: SelectSubset<T, VendorServiceUpdateArgs<ExtArgs>>): Prisma__VendorServiceClient<$Result.GetResult<Prisma.$VendorServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VendorServices.
     * @param {VendorServiceDeleteManyArgs} args - Arguments to filter VendorServices to delete.
     * @example
     * // Delete a few VendorServices
     * const { count } = await prisma.vendorService.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VendorServiceDeleteManyArgs>(args?: SelectSubset<T, VendorServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VendorServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VendorServices
     * const vendorService = await prisma.vendorService.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VendorServiceUpdateManyArgs>(args: SelectSubset<T, VendorServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VendorServices and returns the data updated in the database.
     * @param {VendorServiceUpdateManyAndReturnArgs} args - Arguments to update many VendorServices.
     * @example
     * // Update many VendorServices
     * const vendorService = await prisma.vendorService.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VendorServices and only return the `id`
     * const vendorServiceWithIdOnly = await prisma.vendorService.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VendorServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, VendorServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VendorService.
     * @param {VendorServiceUpsertArgs} args - Arguments to update or create a VendorService.
     * @example
     * // Update or create a VendorService
     * const vendorService = await prisma.vendorService.upsert({
     *   create: {
     *     // ... data to create a VendorService
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VendorService we want to update
     *   }
     * })
     */
    upsert<T extends VendorServiceUpsertArgs>(args: SelectSubset<T, VendorServiceUpsertArgs<ExtArgs>>): Prisma__VendorServiceClient<$Result.GetResult<Prisma.$VendorServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VendorServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorServiceCountArgs} args - Arguments to filter VendorServices to count.
     * @example
     * // Count the number of VendorServices
     * const count = await prisma.vendorService.count({
     *   where: {
     *     // ... the filter for the VendorServices we want to count
     *   }
     * })
    **/
    count<T extends VendorServiceCountArgs>(
      args?: Subset<T, VendorServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VendorServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VendorService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VendorServiceAggregateArgs>(args: Subset<T, VendorServiceAggregateArgs>): Prisma.PrismaPromise<GetVendorServiceAggregateType<T>>

    /**
     * Group by VendorService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorServiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VendorServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VendorServiceGroupByArgs['orderBy'] }
        : { orderBy?: VendorServiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VendorServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVendorServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VendorService model
   */
  readonly fields: VendorServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VendorService.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VendorServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vendor<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VendorService model
   */
  interface VendorServiceFieldRefs {
    readonly id: FieldRef<"VendorService", 'String'>
    readonly name: FieldRef<"VendorService", 'String'>
    readonly imageUrl: FieldRef<"VendorService", 'String'>
    readonly price: FieldRef<"VendorService", 'Decimal'>
    readonly createdAt: FieldRef<"VendorService", 'DateTime'>
    readonly updatedAt: FieldRef<"VendorService", 'DateTime'>
    readonly vendorId: FieldRef<"VendorService", 'String'>
  }
    

  // Custom InputTypes
  /**
   * VendorService findUnique
   */
  export type VendorServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorService
     */
    select?: VendorServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorService
     */
    omit?: VendorServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorServiceInclude<ExtArgs> | null
    /**
     * Filter, which VendorService to fetch.
     */
    where: VendorServiceWhereUniqueInput
  }

  /**
   * VendorService findUniqueOrThrow
   */
  export type VendorServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorService
     */
    select?: VendorServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorService
     */
    omit?: VendorServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorServiceInclude<ExtArgs> | null
    /**
     * Filter, which VendorService to fetch.
     */
    where: VendorServiceWhereUniqueInput
  }

  /**
   * VendorService findFirst
   */
  export type VendorServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorService
     */
    select?: VendorServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorService
     */
    omit?: VendorServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorServiceInclude<ExtArgs> | null
    /**
     * Filter, which VendorService to fetch.
     */
    where?: VendorServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VendorServices to fetch.
     */
    orderBy?: VendorServiceOrderByWithRelationInput | VendorServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VendorServices.
     */
    cursor?: VendorServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VendorServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VendorServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VendorServices.
     */
    distinct?: VendorServiceScalarFieldEnum | VendorServiceScalarFieldEnum[]
  }

  /**
   * VendorService findFirstOrThrow
   */
  export type VendorServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorService
     */
    select?: VendorServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorService
     */
    omit?: VendorServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorServiceInclude<ExtArgs> | null
    /**
     * Filter, which VendorService to fetch.
     */
    where?: VendorServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VendorServices to fetch.
     */
    orderBy?: VendorServiceOrderByWithRelationInput | VendorServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VendorServices.
     */
    cursor?: VendorServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VendorServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VendorServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VendorServices.
     */
    distinct?: VendorServiceScalarFieldEnum | VendorServiceScalarFieldEnum[]
  }

  /**
   * VendorService findMany
   */
  export type VendorServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorService
     */
    select?: VendorServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorService
     */
    omit?: VendorServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorServiceInclude<ExtArgs> | null
    /**
     * Filter, which VendorServices to fetch.
     */
    where?: VendorServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VendorServices to fetch.
     */
    orderBy?: VendorServiceOrderByWithRelationInput | VendorServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VendorServices.
     */
    cursor?: VendorServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VendorServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VendorServices.
     */
    skip?: number
    distinct?: VendorServiceScalarFieldEnum | VendorServiceScalarFieldEnum[]
  }

  /**
   * VendorService create
   */
  export type VendorServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorService
     */
    select?: VendorServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorService
     */
    omit?: VendorServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a VendorService.
     */
    data: XOR<VendorServiceCreateInput, VendorServiceUncheckedCreateInput>
  }

  /**
   * VendorService createMany
   */
  export type VendorServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VendorServices.
     */
    data: VendorServiceCreateManyInput | VendorServiceCreateManyInput[]
  }

  /**
   * VendorService createManyAndReturn
   */
  export type VendorServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorService
     */
    select?: VendorServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VendorService
     */
    omit?: VendorServiceOmit<ExtArgs> | null
    /**
     * The data used to create many VendorServices.
     */
    data: VendorServiceCreateManyInput | VendorServiceCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorServiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VendorService update
   */
  export type VendorServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorService
     */
    select?: VendorServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorService
     */
    omit?: VendorServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a VendorService.
     */
    data: XOR<VendorServiceUpdateInput, VendorServiceUncheckedUpdateInput>
    /**
     * Choose, which VendorService to update.
     */
    where: VendorServiceWhereUniqueInput
  }

  /**
   * VendorService updateMany
   */
  export type VendorServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VendorServices.
     */
    data: XOR<VendorServiceUpdateManyMutationInput, VendorServiceUncheckedUpdateManyInput>
    /**
     * Filter which VendorServices to update
     */
    where?: VendorServiceWhereInput
    /**
     * Limit how many VendorServices to update.
     */
    limit?: number
  }

  /**
   * VendorService updateManyAndReturn
   */
  export type VendorServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorService
     */
    select?: VendorServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VendorService
     */
    omit?: VendorServiceOmit<ExtArgs> | null
    /**
     * The data used to update VendorServices.
     */
    data: XOR<VendorServiceUpdateManyMutationInput, VendorServiceUncheckedUpdateManyInput>
    /**
     * Filter which VendorServices to update
     */
    where?: VendorServiceWhereInput
    /**
     * Limit how many VendorServices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorServiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VendorService upsert
   */
  export type VendorServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorService
     */
    select?: VendorServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorService
     */
    omit?: VendorServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the VendorService to update in case it exists.
     */
    where: VendorServiceWhereUniqueInput
    /**
     * In case the VendorService found by the `where` argument doesn't exist, create a new VendorService with this data.
     */
    create: XOR<VendorServiceCreateInput, VendorServiceUncheckedCreateInput>
    /**
     * In case the VendorService was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VendorServiceUpdateInput, VendorServiceUncheckedUpdateInput>
  }

  /**
   * VendorService delete
   */
  export type VendorServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorService
     */
    select?: VendorServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorService
     */
    omit?: VendorServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorServiceInclude<ExtArgs> | null
    /**
     * Filter which VendorService to delete.
     */
    where: VendorServiceWhereUniqueInput
  }

  /**
   * VendorService deleteMany
   */
  export type VendorServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VendorServices to delete
     */
    where?: VendorServiceWhereInput
    /**
     * Limit how many VendorServices to delete.
     */
    limit?: number
  }

  /**
   * VendorService without action
   */
  export type VendorServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorService
     */
    select?: VendorServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorService
     */
    omit?: VendorServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorServiceInclude<ExtArgs> | null
  }


  /**
   * Model AppointMent
   */

  export type AggregateAppointMent = {
    _count: AppointMentCountAggregateOutputType | null
    _min: AppointMentMinAggregateOutputType | null
    _max: AppointMentMaxAggregateOutputType | null
  }

  export type AppointMentMinAggregateOutputType = {
    id: string | null
    time: Date | null
    opened: boolean | null
    note: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    vendorId: string | null
  }

  export type AppointMentMaxAggregateOutputType = {
    id: string | null
    time: Date | null
    opened: boolean | null
    note: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    vendorId: string | null
  }

  export type AppointMentCountAggregateOutputType = {
    id: number
    time: number
    opened: number
    note: number
    createdAt: number
    updatedAt: number
    userId: number
    vendorId: number
    _all: number
  }


  export type AppointMentMinAggregateInputType = {
    id?: true
    time?: true
    opened?: true
    note?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    vendorId?: true
  }

  export type AppointMentMaxAggregateInputType = {
    id?: true
    time?: true
    opened?: true
    note?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    vendorId?: true
  }

  export type AppointMentCountAggregateInputType = {
    id?: true
    time?: true
    opened?: true
    note?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    vendorId?: true
    _all?: true
  }

  export type AppointMentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppointMent to aggregate.
     */
    where?: AppointMentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppointMents to fetch.
     */
    orderBy?: AppointMentOrderByWithRelationInput | AppointMentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointMentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppointMents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppointMents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AppointMents
    **/
    _count?: true | AppointMentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointMentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointMentMaxAggregateInputType
  }

  export type GetAppointMentAggregateType<T extends AppointMentAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointMent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointMent[P]>
      : GetScalarType<T[P], AggregateAppointMent[P]>
  }




  export type AppointMentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointMentWhereInput
    orderBy?: AppointMentOrderByWithAggregationInput | AppointMentOrderByWithAggregationInput[]
    by: AppointMentScalarFieldEnum[] | AppointMentScalarFieldEnum
    having?: AppointMentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointMentCountAggregateInputType | true
    _min?: AppointMentMinAggregateInputType
    _max?: AppointMentMaxAggregateInputType
  }

  export type AppointMentGroupByOutputType = {
    id: string
    time: Date
    opened: boolean
    note: string | null
    createdAt: Date
    updatedAt: Date
    userId: string
    vendorId: string
    _count: AppointMentCountAggregateOutputType | null
    _min: AppointMentMinAggregateOutputType | null
    _max: AppointMentMaxAggregateOutputType | null
  }

  type GetAppointMentGroupByPayload<T extends AppointMentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointMentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointMentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointMentGroupByOutputType[P]>
            : GetScalarType<T[P], AppointMentGroupByOutputType[P]>
        }
      >
    >


  export type AppointMentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    time?: boolean
    opened?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    vendorId?: boolean
    user?: boolean | AccountDefaultArgs<ExtArgs>
    vendor?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointMent"]>

  export type AppointMentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    time?: boolean
    opened?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    vendorId?: boolean
    user?: boolean | AccountDefaultArgs<ExtArgs>
    vendor?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointMent"]>

  export type AppointMentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    time?: boolean
    opened?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    vendorId?: boolean
    user?: boolean | AccountDefaultArgs<ExtArgs>
    vendor?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointMent"]>

  export type AppointMentSelectScalar = {
    id?: boolean
    time?: boolean
    opened?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    vendorId?: boolean
  }

  export type AppointMentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "time" | "opened" | "note" | "createdAt" | "updatedAt" | "userId" | "vendorId", ExtArgs["result"]["appointMent"]>
  export type AppointMentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AccountDefaultArgs<ExtArgs>
    vendor?: boolean | AccountDefaultArgs<ExtArgs>
  }
  export type AppointMentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AccountDefaultArgs<ExtArgs>
    vendor?: boolean | AccountDefaultArgs<ExtArgs>
  }
  export type AppointMentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AccountDefaultArgs<ExtArgs>
    vendor?: boolean | AccountDefaultArgs<ExtArgs>
  }

  export type $AppointMentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AppointMent"
    objects: {
      user: Prisma.$AccountPayload<ExtArgs>
      vendor: Prisma.$AccountPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      time: Date
      opened: boolean
      note: string | null
      createdAt: Date
      updatedAt: Date
      userId: string
      vendorId: string
    }, ExtArgs["result"]["appointMent"]>
    composites: {}
  }

  type AppointMentGetPayload<S extends boolean | null | undefined | AppointMentDefaultArgs> = $Result.GetResult<Prisma.$AppointMentPayload, S>

  type AppointMentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppointMentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppointMentCountAggregateInputType | true
    }

  export interface AppointMentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AppointMent'], meta: { name: 'AppointMent' } }
    /**
     * Find zero or one AppointMent that matches the filter.
     * @param {AppointMentFindUniqueArgs} args - Arguments to find a AppointMent
     * @example
     * // Get one AppointMent
     * const appointMent = await prisma.appointMent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppointMentFindUniqueArgs>(args: SelectSubset<T, AppointMentFindUniqueArgs<ExtArgs>>): Prisma__AppointMentClient<$Result.GetResult<Prisma.$AppointMentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AppointMent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppointMentFindUniqueOrThrowArgs} args - Arguments to find a AppointMent
     * @example
     * // Get one AppointMent
     * const appointMent = await prisma.appointMent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppointMentFindUniqueOrThrowArgs>(args: SelectSubset<T, AppointMentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppointMentClient<$Result.GetResult<Prisma.$AppointMentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppointMent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointMentFindFirstArgs} args - Arguments to find a AppointMent
     * @example
     * // Get one AppointMent
     * const appointMent = await prisma.appointMent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppointMentFindFirstArgs>(args?: SelectSubset<T, AppointMentFindFirstArgs<ExtArgs>>): Prisma__AppointMentClient<$Result.GetResult<Prisma.$AppointMentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppointMent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointMentFindFirstOrThrowArgs} args - Arguments to find a AppointMent
     * @example
     * // Get one AppointMent
     * const appointMent = await prisma.appointMent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppointMentFindFirstOrThrowArgs>(args?: SelectSubset<T, AppointMentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppointMentClient<$Result.GetResult<Prisma.$AppointMentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AppointMents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointMentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AppointMents
     * const appointMents = await prisma.appointMent.findMany()
     * 
     * // Get first 10 AppointMents
     * const appointMents = await prisma.appointMent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointMentWithIdOnly = await prisma.appointMent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppointMentFindManyArgs>(args?: SelectSubset<T, AppointMentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointMentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AppointMent.
     * @param {AppointMentCreateArgs} args - Arguments to create a AppointMent.
     * @example
     * // Create one AppointMent
     * const AppointMent = await prisma.appointMent.create({
     *   data: {
     *     // ... data to create a AppointMent
     *   }
     * })
     * 
     */
    create<T extends AppointMentCreateArgs>(args: SelectSubset<T, AppointMentCreateArgs<ExtArgs>>): Prisma__AppointMentClient<$Result.GetResult<Prisma.$AppointMentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AppointMents.
     * @param {AppointMentCreateManyArgs} args - Arguments to create many AppointMents.
     * @example
     * // Create many AppointMents
     * const appointMent = await prisma.appointMent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppointMentCreateManyArgs>(args?: SelectSubset<T, AppointMentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AppointMents and returns the data saved in the database.
     * @param {AppointMentCreateManyAndReturnArgs} args - Arguments to create many AppointMents.
     * @example
     * // Create many AppointMents
     * const appointMent = await prisma.appointMent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AppointMents and only return the `id`
     * const appointMentWithIdOnly = await prisma.appointMent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppointMentCreateManyAndReturnArgs>(args?: SelectSubset<T, AppointMentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointMentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AppointMent.
     * @param {AppointMentDeleteArgs} args - Arguments to delete one AppointMent.
     * @example
     * // Delete one AppointMent
     * const AppointMent = await prisma.appointMent.delete({
     *   where: {
     *     // ... filter to delete one AppointMent
     *   }
     * })
     * 
     */
    delete<T extends AppointMentDeleteArgs>(args: SelectSubset<T, AppointMentDeleteArgs<ExtArgs>>): Prisma__AppointMentClient<$Result.GetResult<Prisma.$AppointMentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AppointMent.
     * @param {AppointMentUpdateArgs} args - Arguments to update one AppointMent.
     * @example
     * // Update one AppointMent
     * const appointMent = await prisma.appointMent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppointMentUpdateArgs>(args: SelectSubset<T, AppointMentUpdateArgs<ExtArgs>>): Prisma__AppointMentClient<$Result.GetResult<Prisma.$AppointMentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AppointMents.
     * @param {AppointMentDeleteManyArgs} args - Arguments to filter AppointMents to delete.
     * @example
     * // Delete a few AppointMents
     * const { count } = await prisma.appointMent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppointMentDeleteManyArgs>(args?: SelectSubset<T, AppointMentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppointMents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointMentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AppointMents
     * const appointMent = await prisma.appointMent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppointMentUpdateManyArgs>(args: SelectSubset<T, AppointMentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppointMents and returns the data updated in the database.
     * @param {AppointMentUpdateManyAndReturnArgs} args - Arguments to update many AppointMents.
     * @example
     * // Update many AppointMents
     * const appointMent = await prisma.appointMent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AppointMents and only return the `id`
     * const appointMentWithIdOnly = await prisma.appointMent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AppointMentUpdateManyAndReturnArgs>(args: SelectSubset<T, AppointMentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointMentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AppointMent.
     * @param {AppointMentUpsertArgs} args - Arguments to update or create a AppointMent.
     * @example
     * // Update or create a AppointMent
     * const appointMent = await prisma.appointMent.upsert({
     *   create: {
     *     // ... data to create a AppointMent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AppointMent we want to update
     *   }
     * })
     */
    upsert<T extends AppointMentUpsertArgs>(args: SelectSubset<T, AppointMentUpsertArgs<ExtArgs>>): Prisma__AppointMentClient<$Result.GetResult<Prisma.$AppointMentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AppointMents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointMentCountArgs} args - Arguments to filter AppointMents to count.
     * @example
     * // Count the number of AppointMents
     * const count = await prisma.appointMent.count({
     *   where: {
     *     // ... the filter for the AppointMents we want to count
     *   }
     * })
    **/
    count<T extends AppointMentCountArgs>(
      args?: Subset<T, AppointMentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointMentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AppointMent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointMentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AppointMentAggregateArgs>(args: Subset<T, AppointMentAggregateArgs>): Prisma.PrismaPromise<GetAppointMentAggregateType<T>>

    /**
     * Group by AppointMent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointMentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AppointMentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointMentGroupByArgs['orderBy'] }
        : { orderBy?: AppointMentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AppointMentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointMentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AppointMent model
   */
  readonly fields: AppointMentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AppointMent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointMentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vendor<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AppointMent model
   */
  interface AppointMentFieldRefs {
    readonly id: FieldRef<"AppointMent", 'String'>
    readonly time: FieldRef<"AppointMent", 'DateTime'>
    readonly opened: FieldRef<"AppointMent", 'Boolean'>
    readonly note: FieldRef<"AppointMent", 'String'>
    readonly createdAt: FieldRef<"AppointMent", 'DateTime'>
    readonly updatedAt: FieldRef<"AppointMent", 'DateTime'>
    readonly userId: FieldRef<"AppointMent", 'String'>
    readonly vendorId: FieldRef<"AppointMent", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AppointMent findUnique
   */
  export type AppointMentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointMent
     */
    select?: AppointMentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointMent
     */
    omit?: AppointMentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointMentInclude<ExtArgs> | null
    /**
     * Filter, which AppointMent to fetch.
     */
    where: AppointMentWhereUniqueInput
  }

  /**
   * AppointMent findUniqueOrThrow
   */
  export type AppointMentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointMent
     */
    select?: AppointMentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointMent
     */
    omit?: AppointMentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointMentInclude<ExtArgs> | null
    /**
     * Filter, which AppointMent to fetch.
     */
    where: AppointMentWhereUniqueInput
  }

  /**
   * AppointMent findFirst
   */
  export type AppointMentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointMent
     */
    select?: AppointMentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointMent
     */
    omit?: AppointMentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointMentInclude<ExtArgs> | null
    /**
     * Filter, which AppointMent to fetch.
     */
    where?: AppointMentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppointMents to fetch.
     */
    orderBy?: AppointMentOrderByWithRelationInput | AppointMentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppointMents.
     */
    cursor?: AppointMentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppointMents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppointMents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppointMents.
     */
    distinct?: AppointMentScalarFieldEnum | AppointMentScalarFieldEnum[]
  }

  /**
   * AppointMent findFirstOrThrow
   */
  export type AppointMentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointMent
     */
    select?: AppointMentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointMent
     */
    omit?: AppointMentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointMentInclude<ExtArgs> | null
    /**
     * Filter, which AppointMent to fetch.
     */
    where?: AppointMentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppointMents to fetch.
     */
    orderBy?: AppointMentOrderByWithRelationInput | AppointMentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppointMents.
     */
    cursor?: AppointMentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppointMents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppointMents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppointMents.
     */
    distinct?: AppointMentScalarFieldEnum | AppointMentScalarFieldEnum[]
  }

  /**
   * AppointMent findMany
   */
  export type AppointMentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointMent
     */
    select?: AppointMentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointMent
     */
    omit?: AppointMentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointMentInclude<ExtArgs> | null
    /**
     * Filter, which AppointMents to fetch.
     */
    where?: AppointMentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppointMents to fetch.
     */
    orderBy?: AppointMentOrderByWithRelationInput | AppointMentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AppointMents.
     */
    cursor?: AppointMentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppointMents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppointMents.
     */
    skip?: number
    distinct?: AppointMentScalarFieldEnum | AppointMentScalarFieldEnum[]
  }

  /**
   * AppointMent create
   */
  export type AppointMentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointMent
     */
    select?: AppointMentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointMent
     */
    omit?: AppointMentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointMentInclude<ExtArgs> | null
    /**
     * The data needed to create a AppointMent.
     */
    data: XOR<AppointMentCreateInput, AppointMentUncheckedCreateInput>
  }

  /**
   * AppointMent createMany
   */
  export type AppointMentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AppointMents.
     */
    data: AppointMentCreateManyInput | AppointMentCreateManyInput[]
  }

  /**
   * AppointMent createManyAndReturn
   */
  export type AppointMentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointMent
     */
    select?: AppointMentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AppointMent
     */
    omit?: AppointMentOmit<ExtArgs> | null
    /**
     * The data used to create many AppointMents.
     */
    data: AppointMentCreateManyInput | AppointMentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointMentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AppointMent update
   */
  export type AppointMentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointMent
     */
    select?: AppointMentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointMent
     */
    omit?: AppointMentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointMentInclude<ExtArgs> | null
    /**
     * The data needed to update a AppointMent.
     */
    data: XOR<AppointMentUpdateInput, AppointMentUncheckedUpdateInput>
    /**
     * Choose, which AppointMent to update.
     */
    where: AppointMentWhereUniqueInput
  }

  /**
   * AppointMent updateMany
   */
  export type AppointMentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AppointMents.
     */
    data: XOR<AppointMentUpdateManyMutationInput, AppointMentUncheckedUpdateManyInput>
    /**
     * Filter which AppointMents to update
     */
    where?: AppointMentWhereInput
    /**
     * Limit how many AppointMents to update.
     */
    limit?: number
  }

  /**
   * AppointMent updateManyAndReturn
   */
  export type AppointMentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointMent
     */
    select?: AppointMentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AppointMent
     */
    omit?: AppointMentOmit<ExtArgs> | null
    /**
     * The data used to update AppointMents.
     */
    data: XOR<AppointMentUpdateManyMutationInput, AppointMentUncheckedUpdateManyInput>
    /**
     * Filter which AppointMents to update
     */
    where?: AppointMentWhereInput
    /**
     * Limit how many AppointMents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointMentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AppointMent upsert
   */
  export type AppointMentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointMent
     */
    select?: AppointMentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointMent
     */
    omit?: AppointMentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointMentInclude<ExtArgs> | null
    /**
     * The filter to search for the AppointMent to update in case it exists.
     */
    where: AppointMentWhereUniqueInput
    /**
     * In case the AppointMent found by the `where` argument doesn't exist, create a new AppointMent with this data.
     */
    create: XOR<AppointMentCreateInput, AppointMentUncheckedCreateInput>
    /**
     * In case the AppointMent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointMentUpdateInput, AppointMentUncheckedUpdateInput>
  }

  /**
   * AppointMent delete
   */
  export type AppointMentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointMent
     */
    select?: AppointMentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointMent
     */
    omit?: AppointMentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointMentInclude<ExtArgs> | null
    /**
     * Filter which AppointMent to delete.
     */
    where: AppointMentWhereUniqueInput
  }

  /**
   * AppointMent deleteMany
   */
  export type AppointMentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppointMents to delete
     */
    where?: AppointMentWhereInput
    /**
     * Limit how many AppointMents to delete.
     */
    limit?: number
  }

  /**
   * AppointMent without action
   */
  export type AppointMentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointMent
     */
    select?: AppointMentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointMent
     */
    omit?: AppointMentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointMentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserSessionScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    expiration: 'expiration',
    fcmToken: 'fcmToken',
    refreshToken: 'refreshToken',
    createdAt: 'createdAt',
    lastSignedIn: 'lastSignedIn'
  };

  export type UserSessionScalarFieldEnum = (typeof UserSessionScalarFieldEnum)[keyof typeof UserSessionScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phoneNumber: 'phoneNumber',
    password: 'password',
    avatarUrl: 'avatarUrl',
    rating: 'rating',
    type: 'type',
    isSuspended: 'isSuspended',
    businessName: 'businessName',
    businessType: 'businessType',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const VendorServiceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    imageUrl: 'imageUrl',
    price: 'price',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    vendorId: 'vendorId'
  };

  export type VendorServiceScalarFieldEnum = (typeof VendorServiceScalarFieldEnum)[keyof typeof VendorServiceScalarFieldEnum]


  export const AppointMentScalarFieldEnum: {
    id: 'id',
    time: 'time',
    opened: 'opened',
    note: 'note',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    vendorId: 'vendorId'
  };

  export type AppointMentScalarFieldEnum = (typeof AppointMentScalarFieldEnum)[keyof typeof AppointMentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'AccountType'
   */
  export type EnumAccountTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccountType'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'BusinessType'
   */
  export type EnumBusinessTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BusinessType'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type UserSessionWhereInput = {
    AND?: UserSessionWhereInput | UserSessionWhereInput[]
    OR?: UserSessionWhereInput[]
    NOT?: UserSessionWhereInput | UserSessionWhereInput[]
    id?: StringFilter<"UserSession"> | string
    accountId?: StringFilter<"UserSession"> | string
    expiration?: DateTimeFilter<"UserSession"> | Date | string
    fcmToken?: StringNullableFilter<"UserSession"> | string | null
    refreshToken?: StringNullableFilter<"UserSession"> | string | null
    createdAt?: DateTimeFilter<"UserSession"> | Date | string
    lastSignedIn?: DateTimeNullableFilter<"UserSession"> | Date | string | null
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
  }

  export type UserSessionOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    expiration?: SortOrder
    fcmToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    lastSignedIn?: SortOrderInput | SortOrder
    account?: AccountOrderByWithRelationInput
  }

  export type UserSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserSessionWhereInput | UserSessionWhereInput[]
    OR?: UserSessionWhereInput[]
    NOT?: UserSessionWhereInput | UserSessionWhereInput[]
    accountId?: StringFilter<"UserSession"> | string
    expiration?: DateTimeFilter<"UserSession"> | Date | string
    fcmToken?: StringNullableFilter<"UserSession"> | string | null
    refreshToken?: StringNullableFilter<"UserSession"> | string | null
    createdAt?: DateTimeFilter<"UserSession"> | Date | string
    lastSignedIn?: DateTimeNullableFilter<"UserSession"> | Date | string | null
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
  }, "id">

  export type UserSessionOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    expiration?: SortOrder
    fcmToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    lastSignedIn?: SortOrderInput | SortOrder
    _count?: UserSessionCountOrderByAggregateInput
    _max?: UserSessionMaxOrderByAggregateInput
    _min?: UserSessionMinOrderByAggregateInput
  }

  export type UserSessionScalarWhereWithAggregatesInput = {
    AND?: UserSessionScalarWhereWithAggregatesInput | UserSessionScalarWhereWithAggregatesInput[]
    OR?: UserSessionScalarWhereWithAggregatesInput[]
    NOT?: UserSessionScalarWhereWithAggregatesInput | UserSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserSession"> | string
    accountId?: StringWithAggregatesFilter<"UserSession"> | string
    expiration?: DateTimeWithAggregatesFilter<"UserSession"> | Date | string
    fcmToken?: StringNullableWithAggregatesFilter<"UserSession"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"UserSession"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UserSession"> | Date | string
    lastSignedIn?: DateTimeNullableWithAggregatesFilter<"UserSession"> | Date | string | null
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    name?: StringFilter<"Account"> | string
    email?: StringNullableFilter<"Account"> | string | null
    phoneNumber?: StringFilter<"Account"> | string
    password?: StringNullableFilter<"Account"> | string | null
    avatarUrl?: StringNullableFilter<"Account"> | string | null
    rating?: DecimalFilter<"Account"> | Decimal | DecimalJsLike | number | string
    type?: EnumAccountTypeFilter<"Account"> | $Enums.AccountType
    isSuspended?: BoolFilter<"Account"> | boolean
    businessName?: StringNullableFilter<"Account"> | string | null
    businessType?: EnumBusinessTypeNullableFilter<"Account"> | $Enums.BusinessType | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    sessions?: UserSessionListRelationFilter
    services?: VendorServiceListRelationFilter
    appointmentsAsUser?: AppointMentListRelationFilter
    appointmentsAsVendor?: AppointMentListRelationFilter
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phoneNumber?: SortOrder
    password?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    rating?: SortOrder
    type?: SortOrder
    isSuspended?: SortOrder
    businessName?: SortOrderInput | SortOrder
    businessType?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sessions?: UserSessionOrderByRelationAggregateInput
    services?: VendorServiceOrderByRelationAggregateInput
    appointmentsAsUser?: AppointMentOrderByRelationAggregateInput
    appointmentsAsVendor?: AppointMentOrderByRelationAggregateInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phoneNumber?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    name?: StringFilter<"Account"> | string
    password?: StringNullableFilter<"Account"> | string | null
    avatarUrl?: StringNullableFilter<"Account"> | string | null
    rating?: DecimalFilter<"Account"> | Decimal | DecimalJsLike | number | string
    type?: EnumAccountTypeFilter<"Account"> | $Enums.AccountType
    isSuspended?: BoolFilter<"Account"> | boolean
    businessName?: StringNullableFilter<"Account"> | string | null
    businessType?: EnumBusinessTypeNullableFilter<"Account"> | $Enums.BusinessType | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    sessions?: UserSessionListRelationFilter
    services?: VendorServiceListRelationFilter
    appointmentsAsUser?: AppointMentListRelationFilter
    appointmentsAsVendor?: AppointMentListRelationFilter
  }, "id" | "email" | "phoneNumber">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phoneNumber?: SortOrder
    password?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    rating?: SortOrder
    type?: SortOrder
    isSuspended?: SortOrder
    businessName?: SortOrderInput | SortOrder
    businessType?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    name?: StringWithAggregatesFilter<"Account"> | string
    email?: StringNullableWithAggregatesFilter<"Account"> | string | null
    phoneNumber?: StringWithAggregatesFilter<"Account"> | string
    password?: StringNullableWithAggregatesFilter<"Account"> | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"Account"> | string | null
    rating?: DecimalWithAggregatesFilter<"Account"> | Decimal | DecimalJsLike | number | string
    type?: EnumAccountTypeWithAggregatesFilter<"Account"> | $Enums.AccountType
    isSuspended?: BoolWithAggregatesFilter<"Account"> | boolean
    businessName?: StringNullableWithAggregatesFilter<"Account"> | string | null
    businessType?: EnumBusinessTypeNullableWithAggregatesFilter<"Account"> | $Enums.BusinessType | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type VendorServiceWhereInput = {
    AND?: VendorServiceWhereInput | VendorServiceWhereInput[]
    OR?: VendorServiceWhereInput[]
    NOT?: VendorServiceWhereInput | VendorServiceWhereInput[]
    id?: StringFilter<"VendorService"> | string
    name?: StringFilter<"VendorService"> | string
    imageUrl?: StringNullableFilter<"VendorService"> | string | null
    price?: DecimalFilter<"VendorService"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"VendorService"> | Date | string
    updatedAt?: DateTimeFilter<"VendorService"> | Date | string
    vendorId?: StringFilter<"VendorService"> | string
    vendor?: XOR<AccountScalarRelationFilter, AccountWhereInput>
  }

  export type VendorServiceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vendorId?: SortOrder
    vendor?: AccountOrderByWithRelationInput
  }

  export type VendorServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VendorServiceWhereInput | VendorServiceWhereInput[]
    OR?: VendorServiceWhereInput[]
    NOT?: VendorServiceWhereInput | VendorServiceWhereInput[]
    name?: StringFilter<"VendorService"> | string
    imageUrl?: StringNullableFilter<"VendorService"> | string | null
    price?: DecimalFilter<"VendorService"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"VendorService"> | Date | string
    updatedAt?: DateTimeFilter<"VendorService"> | Date | string
    vendorId?: StringFilter<"VendorService"> | string
    vendor?: XOR<AccountScalarRelationFilter, AccountWhereInput>
  }, "id">

  export type VendorServiceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vendorId?: SortOrder
    _count?: VendorServiceCountOrderByAggregateInput
    _avg?: VendorServiceAvgOrderByAggregateInput
    _max?: VendorServiceMaxOrderByAggregateInput
    _min?: VendorServiceMinOrderByAggregateInput
    _sum?: VendorServiceSumOrderByAggregateInput
  }

  export type VendorServiceScalarWhereWithAggregatesInput = {
    AND?: VendorServiceScalarWhereWithAggregatesInput | VendorServiceScalarWhereWithAggregatesInput[]
    OR?: VendorServiceScalarWhereWithAggregatesInput[]
    NOT?: VendorServiceScalarWhereWithAggregatesInput | VendorServiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VendorService"> | string
    name?: StringWithAggregatesFilter<"VendorService"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"VendorService"> | string | null
    price?: DecimalWithAggregatesFilter<"VendorService"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"VendorService"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VendorService"> | Date | string
    vendorId?: StringWithAggregatesFilter<"VendorService"> | string
  }

  export type AppointMentWhereInput = {
    AND?: AppointMentWhereInput | AppointMentWhereInput[]
    OR?: AppointMentWhereInput[]
    NOT?: AppointMentWhereInput | AppointMentWhereInput[]
    id?: StringFilter<"AppointMent"> | string
    time?: DateTimeFilter<"AppointMent"> | Date | string
    opened?: BoolFilter<"AppointMent"> | boolean
    note?: StringNullableFilter<"AppointMent"> | string | null
    createdAt?: DateTimeFilter<"AppointMent"> | Date | string
    updatedAt?: DateTimeFilter<"AppointMent"> | Date | string
    userId?: StringFilter<"AppointMent"> | string
    vendorId?: StringFilter<"AppointMent"> | string
    user?: XOR<AccountScalarRelationFilter, AccountWhereInput>
    vendor?: XOR<AccountScalarRelationFilter, AccountWhereInput>
  }

  export type AppointMentOrderByWithRelationInput = {
    id?: SortOrder
    time?: SortOrder
    opened?: SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    vendorId?: SortOrder
    user?: AccountOrderByWithRelationInput
    vendor?: AccountOrderByWithRelationInput
  }

  export type AppointMentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AppointMentWhereInput | AppointMentWhereInput[]
    OR?: AppointMentWhereInput[]
    NOT?: AppointMentWhereInput | AppointMentWhereInput[]
    time?: DateTimeFilter<"AppointMent"> | Date | string
    opened?: BoolFilter<"AppointMent"> | boolean
    note?: StringNullableFilter<"AppointMent"> | string | null
    createdAt?: DateTimeFilter<"AppointMent"> | Date | string
    updatedAt?: DateTimeFilter<"AppointMent"> | Date | string
    userId?: StringFilter<"AppointMent"> | string
    vendorId?: StringFilter<"AppointMent"> | string
    user?: XOR<AccountScalarRelationFilter, AccountWhereInput>
    vendor?: XOR<AccountScalarRelationFilter, AccountWhereInput>
  }, "id">

  export type AppointMentOrderByWithAggregationInput = {
    id?: SortOrder
    time?: SortOrder
    opened?: SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    vendorId?: SortOrder
    _count?: AppointMentCountOrderByAggregateInput
    _max?: AppointMentMaxOrderByAggregateInput
    _min?: AppointMentMinOrderByAggregateInput
  }

  export type AppointMentScalarWhereWithAggregatesInput = {
    AND?: AppointMentScalarWhereWithAggregatesInput | AppointMentScalarWhereWithAggregatesInput[]
    OR?: AppointMentScalarWhereWithAggregatesInput[]
    NOT?: AppointMentScalarWhereWithAggregatesInput | AppointMentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AppointMent"> | string
    time?: DateTimeWithAggregatesFilter<"AppointMent"> | Date | string
    opened?: BoolWithAggregatesFilter<"AppointMent"> | boolean
    note?: StringNullableWithAggregatesFilter<"AppointMent"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AppointMent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AppointMent"> | Date | string
    userId?: StringWithAggregatesFilter<"AppointMent"> | string
    vendorId?: StringWithAggregatesFilter<"AppointMent"> | string
  }

  export type UserSessionCreateInput = {
    id?: string
    expiration: Date | string
    fcmToken?: string | null
    refreshToken?: string | null
    createdAt?: Date | string
    lastSignedIn?: Date | string | null
    account: AccountCreateNestedOneWithoutSessionsInput
  }

  export type UserSessionUncheckedCreateInput = {
    id?: string
    accountId: string
    expiration: Date | string
    fcmToken?: string | null
    refreshToken?: string | null
    createdAt?: Date | string
    lastSignedIn?: Date | string | null
  }

  export type UserSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    fcmToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSignedIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    account?: AccountUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type UserSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    fcmToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSignedIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserSessionCreateManyInput = {
    id?: string
    accountId: string
    expiration: Date | string
    fcmToken?: string | null
    refreshToken?: string | null
    createdAt?: Date | string
    lastSignedIn?: Date | string | null
  }

  export type UserSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    fcmToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSignedIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    fcmToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSignedIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AccountCreateInput = {
    id?: string
    name: string
    email?: string | null
    phoneNumber: string
    password?: string | null
    avatarUrl?: string | null
    rating?: Decimal | DecimalJsLike | number | string
    type: $Enums.AccountType
    isSuspended?: boolean
    businessName?: string | null
    businessType?: $Enums.BusinessType | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: UserSessionCreateNestedManyWithoutAccountInput
    services?: VendorServiceCreateNestedManyWithoutVendorInput
    appointmentsAsUser?: AppointMentCreateNestedManyWithoutUserInput
    appointmentsAsVendor?: AppointMentCreateNestedManyWithoutVendorInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    name: string
    email?: string | null
    phoneNumber: string
    password?: string | null
    avatarUrl?: string | null
    rating?: Decimal | DecimalJsLike | number | string
    type: $Enums.AccountType
    isSuspended?: boolean
    businessName?: string | null
    businessType?: $Enums.BusinessType | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: UserSessionUncheckedCreateNestedManyWithoutAccountInput
    services?: VendorServiceUncheckedCreateNestedManyWithoutVendorInput
    appointmentsAsUser?: AppointMentUncheckedCreateNestedManyWithoutUserInput
    appointmentsAsVendor?: AppointMentUncheckedCreateNestedManyWithoutVendorInput
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    isSuspended?: BoolFieldUpdateOperationsInput | boolean
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    businessType?: NullableEnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: UserSessionUpdateManyWithoutAccountNestedInput
    services?: VendorServiceUpdateManyWithoutVendorNestedInput
    appointmentsAsUser?: AppointMentUpdateManyWithoutUserNestedInput
    appointmentsAsVendor?: AppointMentUpdateManyWithoutVendorNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    isSuspended?: BoolFieldUpdateOperationsInput | boolean
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    businessType?: NullableEnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: UserSessionUncheckedUpdateManyWithoutAccountNestedInput
    services?: VendorServiceUncheckedUpdateManyWithoutVendorNestedInput
    appointmentsAsUser?: AppointMentUncheckedUpdateManyWithoutUserNestedInput
    appointmentsAsVendor?: AppointMentUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type AccountCreateManyInput = {
    id?: string
    name: string
    email?: string | null
    phoneNumber: string
    password?: string | null
    avatarUrl?: string | null
    rating?: Decimal | DecimalJsLike | number | string
    type: $Enums.AccountType
    isSuspended?: boolean
    businessName?: string | null
    businessType?: $Enums.BusinessType | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    isSuspended?: BoolFieldUpdateOperationsInput | boolean
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    businessType?: NullableEnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    isSuspended?: BoolFieldUpdateOperationsInput | boolean
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    businessType?: NullableEnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VendorServiceCreateInput = {
    id?: string
    name: string
    imageUrl?: string | null
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    vendor: AccountCreateNestedOneWithoutServicesInput
  }

  export type VendorServiceUncheckedCreateInput = {
    id?: string
    name: string
    imageUrl?: string | null
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    vendorId: string
  }

  export type VendorServiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: AccountUpdateOneRequiredWithoutServicesNestedInput
  }

  export type VendorServiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendorId?: StringFieldUpdateOperationsInput | string
  }

  export type VendorServiceCreateManyInput = {
    id?: string
    name: string
    imageUrl?: string | null
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    vendorId: string
  }

  export type VendorServiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VendorServiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendorId?: StringFieldUpdateOperationsInput | string
  }

  export type AppointMentCreateInput = {
    id?: string
    time: Date | string
    opened: boolean
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: AccountCreateNestedOneWithoutAppointmentsAsUserInput
    vendor: AccountCreateNestedOneWithoutAppointmentsAsVendorInput
  }

  export type AppointMentUncheckedCreateInput = {
    id?: string
    time: Date | string
    opened: boolean
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    vendorId: string
  }

  export type AppointMentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    opened?: BoolFieldUpdateOperationsInput | boolean
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: AccountUpdateOneRequiredWithoutAppointmentsAsUserNestedInput
    vendor?: AccountUpdateOneRequiredWithoutAppointmentsAsVendorNestedInput
  }

  export type AppointMentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    opened?: BoolFieldUpdateOperationsInput | boolean
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
  }

  export type AppointMentCreateManyInput = {
    id?: string
    time: Date | string
    opened: boolean
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    vendorId: string
  }

  export type AppointMentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    opened?: BoolFieldUpdateOperationsInput | boolean
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointMentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    opened?: BoolFieldUpdateOperationsInput | boolean
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AccountScalarRelationFilter = {
    is?: AccountWhereInput
    isNot?: AccountWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserSessionCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    expiration?: SortOrder
    fcmToken?: SortOrder
    refreshToken?: SortOrder
    createdAt?: SortOrder
    lastSignedIn?: SortOrder
  }

  export type UserSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    expiration?: SortOrder
    fcmToken?: SortOrder
    refreshToken?: SortOrder
    createdAt?: SortOrder
    lastSignedIn?: SortOrder
  }

  export type UserSessionMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    expiration?: SortOrder
    fcmToken?: SortOrder
    refreshToken?: SortOrder
    createdAt?: SortOrder
    lastSignedIn?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumAccountTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountType[]
    notIn?: $Enums.AccountType[]
    not?: NestedEnumAccountTypeFilter<$PrismaModel> | $Enums.AccountType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumBusinessTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.BusinessType | EnumBusinessTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.BusinessType[] | null
    notIn?: $Enums.BusinessType[] | null
    not?: NestedEnumBusinessTypeNullableFilter<$PrismaModel> | $Enums.BusinessType | null
  }

  export type UserSessionListRelationFilter = {
    every?: UserSessionWhereInput
    some?: UserSessionWhereInput
    none?: UserSessionWhereInput
  }

  export type VendorServiceListRelationFilter = {
    every?: VendorServiceWhereInput
    some?: VendorServiceWhereInput
    none?: VendorServiceWhereInput
  }

  export type AppointMentListRelationFilter = {
    every?: AppointMentWhereInput
    some?: AppointMentWhereInput
    none?: AppointMentWhereInput
  }

  export type UserSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VendorServiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AppointMentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrder
    rating?: SortOrder
    type?: SortOrder
    isSuspended?: SortOrder
    businessName?: SortOrder
    businessType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrder
    rating?: SortOrder
    type?: SortOrder
    isSuspended?: SortOrder
    businessName?: SortOrder
    businessType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrder
    rating?: SortOrder
    type?: SortOrder
    isSuspended?: SortOrder
    businessName?: SortOrder
    businessType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumAccountTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountType[]
    notIn?: $Enums.AccountType[]
    not?: NestedEnumAccountTypeWithAggregatesFilter<$PrismaModel> | $Enums.AccountType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountTypeFilter<$PrismaModel>
    _max?: NestedEnumAccountTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumBusinessTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BusinessType | EnumBusinessTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.BusinessType[] | null
    notIn?: $Enums.BusinessType[] | null
    not?: NestedEnumBusinessTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.BusinessType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumBusinessTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumBusinessTypeNullableFilter<$PrismaModel>
  }

  export type VendorServiceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vendorId?: SortOrder
  }

  export type VendorServiceAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type VendorServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vendorId?: SortOrder
  }

  export type VendorServiceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vendorId?: SortOrder
  }

  export type VendorServiceSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type AppointMentCountOrderByAggregateInput = {
    id?: SortOrder
    time?: SortOrder
    opened?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    vendorId?: SortOrder
  }

  export type AppointMentMaxOrderByAggregateInput = {
    id?: SortOrder
    time?: SortOrder
    opened?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    vendorId?: SortOrder
  }

  export type AppointMentMinOrderByAggregateInput = {
    id?: SortOrder
    time?: SortOrder
    opened?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    vendorId?: SortOrder
  }

  export type AccountCreateNestedOneWithoutSessionsInput = {
    create?: XOR<AccountCreateWithoutSessionsInput, AccountUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: AccountCreateOrConnectWithoutSessionsInput
    connect?: AccountWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AccountUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<AccountCreateWithoutSessionsInput, AccountUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: AccountCreateOrConnectWithoutSessionsInput
    upsert?: AccountUpsertWithoutSessionsInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutSessionsInput, AccountUpdateWithoutSessionsInput>, AccountUncheckedUpdateWithoutSessionsInput>
  }

  export type UserSessionCreateNestedManyWithoutAccountInput = {
    create?: XOR<UserSessionCreateWithoutAccountInput, UserSessionUncheckedCreateWithoutAccountInput> | UserSessionCreateWithoutAccountInput[] | UserSessionUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: UserSessionCreateOrConnectWithoutAccountInput | UserSessionCreateOrConnectWithoutAccountInput[]
    createMany?: UserSessionCreateManyAccountInputEnvelope
    connect?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
  }

  export type VendorServiceCreateNestedManyWithoutVendorInput = {
    create?: XOR<VendorServiceCreateWithoutVendorInput, VendorServiceUncheckedCreateWithoutVendorInput> | VendorServiceCreateWithoutVendorInput[] | VendorServiceUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: VendorServiceCreateOrConnectWithoutVendorInput | VendorServiceCreateOrConnectWithoutVendorInput[]
    createMany?: VendorServiceCreateManyVendorInputEnvelope
    connect?: VendorServiceWhereUniqueInput | VendorServiceWhereUniqueInput[]
  }

  export type AppointMentCreateNestedManyWithoutUserInput = {
    create?: XOR<AppointMentCreateWithoutUserInput, AppointMentUncheckedCreateWithoutUserInput> | AppointMentCreateWithoutUserInput[] | AppointMentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AppointMentCreateOrConnectWithoutUserInput | AppointMentCreateOrConnectWithoutUserInput[]
    createMany?: AppointMentCreateManyUserInputEnvelope
    connect?: AppointMentWhereUniqueInput | AppointMentWhereUniqueInput[]
  }

  export type AppointMentCreateNestedManyWithoutVendorInput = {
    create?: XOR<AppointMentCreateWithoutVendorInput, AppointMentUncheckedCreateWithoutVendorInput> | AppointMentCreateWithoutVendorInput[] | AppointMentUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: AppointMentCreateOrConnectWithoutVendorInput | AppointMentCreateOrConnectWithoutVendorInput[]
    createMany?: AppointMentCreateManyVendorInputEnvelope
    connect?: AppointMentWhereUniqueInput | AppointMentWhereUniqueInput[]
  }

  export type UserSessionUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<UserSessionCreateWithoutAccountInput, UserSessionUncheckedCreateWithoutAccountInput> | UserSessionCreateWithoutAccountInput[] | UserSessionUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: UserSessionCreateOrConnectWithoutAccountInput | UserSessionCreateOrConnectWithoutAccountInput[]
    createMany?: UserSessionCreateManyAccountInputEnvelope
    connect?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
  }

  export type VendorServiceUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<VendorServiceCreateWithoutVendorInput, VendorServiceUncheckedCreateWithoutVendorInput> | VendorServiceCreateWithoutVendorInput[] | VendorServiceUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: VendorServiceCreateOrConnectWithoutVendorInput | VendorServiceCreateOrConnectWithoutVendorInput[]
    createMany?: VendorServiceCreateManyVendorInputEnvelope
    connect?: VendorServiceWhereUniqueInput | VendorServiceWhereUniqueInput[]
  }

  export type AppointMentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AppointMentCreateWithoutUserInput, AppointMentUncheckedCreateWithoutUserInput> | AppointMentCreateWithoutUserInput[] | AppointMentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AppointMentCreateOrConnectWithoutUserInput | AppointMentCreateOrConnectWithoutUserInput[]
    createMany?: AppointMentCreateManyUserInputEnvelope
    connect?: AppointMentWhereUniqueInput | AppointMentWhereUniqueInput[]
  }

  export type AppointMentUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<AppointMentCreateWithoutVendorInput, AppointMentUncheckedCreateWithoutVendorInput> | AppointMentCreateWithoutVendorInput[] | AppointMentUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: AppointMentCreateOrConnectWithoutVendorInput | AppointMentCreateOrConnectWithoutVendorInput[]
    createMany?: AppointMentCreateManyVendorInputEnvelope
    connect?: AppointMentWhereUniqueInput | AppointMentWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumAccountTypeFieldUpdateOperationsInput = {
    set?: $Enums.AccountType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableEnumBusinessTypeFieldUpdateOperationsInput = {
    set?: $Enums.BusinessType | null
  }

  export type UserSessionUpdateManyWithoutAccountNestedInput = {
    create?: XOR<UserSessionCreateWithoutAccountInput, UserSessionUncheckedCreateWithoutAccountInput> | UserSessionCreateWithoutAccountInput[] | UserSessionUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: UserSessionCreateOrConnectWithoutAccountInput | UserSessionCreateOrConnectWithoutAccountInput[]
    upsert?: UserSessionUpsertWithWhereUniqueWithoutAccountInput | UserSessionUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: UserSessionCreateManyAccountInputEnvelope
    set?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
    disconnect?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
    delete?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
    connect?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
    update?: UserSessionUpdateWithWhereUniqueWithoutAccountInput | UserSessionUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: UserSessionUpdateManyWithWhereWithoutAccountInput | UserSessionUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: UserSessionScalarWhereInput | UserSessionScalarWhereInput[]
  }

  export type VendorServiceUpdateManyWithoutVendorNestedInput = {
    create?: XOR<VendorServiceCreateWithoutVendorInput, VendorServiceUncheckedCreateWithoutVendorInput> | VendorServiceCreateWithoutVendorInput[] | VendorServiceUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: VendorServiceCreateOrConnectWithoutVendorInput | VendorServiceCreateOrConnectWithoutVendorInput[]
    upsert?: VendorServiceUpsertWithWhereUniqueWithoutVendorInput | VendorServiceUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: VendorServiceCreateManyVendorInputEnvelope
    set?: VendorServiceWhereUniqueInput | VendorServiceWhereUniqueInput[]
    disconnect?: VendorServiceWhereUniqueInput | VendorServiceWhereUniqueInput[]
    delete?: VendorServiceWhereUniqueInput | VendorServiceWhereUniqueInput[]
    connect?: VendorServiceWhereUniqueInput | VendorServiceWhereUniqueInput[]
    update?: VendorServiceUpdateWithWhereUniqueWithoutVendorInput | VendorServiceUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: VendorServiceUpdateManyWithWhereWithoutVendorInput | VendorServiceUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: VendorServiceScalarWhereInput | VendorServiceScalarWhereInput[]
  }

  export type AppointMentUpdateManyWithoutUserNestedInput = {
    create?: XOR<AppointMentCreateWithoutUserInput, AppointMentUncheckedCreateWithoutUserInput> | AppointMentCreateWithoutUserInput[] | AppointMentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AppointMentCreateOrConnectWithoutUserInput | AppointMentCreateOrConnectWithoutUserInput[]
    upsert?: AppointMentUpsertWithWhereUniqueWithoutUserInput | AppointMentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AppointMentCreateManyUserInputEnvelope
    set?: AppointMentWhereUniqueInput | AppointMentWhereUniqueInput[]
    disconnect?: AppointMentWhereUniqueInput | AppointMentWhereUniqueInput[]
    delete?: AppointMentWhereUniqueInput | AppointMentWhereUniqueInput[]
    connect?: AppointMentWhereUniqueInput | AppointMentWhereUniqueInput[]
    update?: AppointMentUpdateWithWhereUniqueWithoutUserInput | AppointMentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AppointMentUpdateManyWithWhereWithoutUserInput | AppointMentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AppointMentScalarWhereInput | AppointMentScalarWhereInput[]
  }

  export type AppointMentUpdateManyWithoutVendorNestedInput = {
    create?: XOR<AppointMentCreateWithoutVendorInput, AppointMentUncheckedCreateWithoutVendorInput> | AppointMentCreateWithoutVendorInput[] | AppointMentUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: AppointMentCreateOrConnectWithoutVendorInput | AppointMentCreateOrConnectWithoutVendorInput[]
    upsert?: AppointMentUpsertWithWhereUniqueWithoutVendorInput | AppointMentUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: AppointMentCreateManyVendorInputEnvelope
    set?: AppointMentWhereUniqueInput | AppointMentWhereUniqueInput[]
    disconnect?: AppointMentWhereUniqueInput | AppointMentWhereUniqueInput[]
    delete?: AppointMentWhereUniqueInput | AppointMentWhereUniqueInput[]
    connect?: AppointMentWhereUniqueInput | AppointMentWhereUniqueInput[]
    update?: AppointMentUpdateWithWhereUniqueWithoutVendorInput | AppointMentUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: AppointMentUpdateManyWithWhereWithoutVendorInput | AppointMentUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: AppointMentScalarWhereInput | AppointMentScalarWhereInput[]
  }

  export type UserSessionUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<UserSessionCreateWithoutAccountInput, UserSessionUncheckedCreateWithoutAccountInput> | UserSessionCreateWithoutAccountInput[] | UserSessionUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: UserSessionCreateOrConnectWithoutAccountInput | UserSessionCreateOrConnectWithoutAccountInput[]
    upsert?: UserSessionUpsertWithWhereUniqueWithoutAccountInput | UserSessionUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: UserSessionCreateManyAccountInputEnvelope
    set?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
    disconnect?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
    delete?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
    connect?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
    update?: UserSessionUpdateWithWhereUniqueWithoutAccountInput | UserSessionUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: UserSessionUpdateManyWithWhereWithoutAccountInput | UserSessionUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: UserSessionScalarWhereInput | UserSessionScalarWhereInput[]
  }

  export type VendorServiceUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: XOR<VendorServiceCreateWithoutVendorInput, VendorServiceUncheckedCreateWithoutVendorInput> | VendorServiceCreateWithoutVendorInput[] | VendorServiceUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: VendorServiceCreateOrConnectWithoutVendorInput | VendorServiceCreateOrConnectWithoutVendorInput[]
    upsert?: VendorServiceUpsertWithWhereUniqueWithoutVendorInput | VendorServiceUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: VendorServiceCreateManyVendorInputEnvelope
    set?: VendorServiceWhereUniqueInput | VendorServiceWhereUniqueInput[]
    disconnect?: VendorServiceWhereUniqueInput | VendorServiceWhereUniqueInput[]
    delete?: VendorServiceWhereUniqueInput | VendorServiceWhereUniqueInput[]
    connect?: VendorServiceWhereUniqueInput | VendorServiceWhereUniqueInput[]
    update?: VendorServiceUpdateWithWhereUniqueWithoutVendorInput | VendorServiceUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: VendorServiceUpdateManyWithWhereWithoutVendorInput | VendorServiceUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: VendorServiceScalarWhereInput | VendorServiceScalarWhereInput[]
  }

  export type AppointMentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AppointMentCreateWithoutUserInput, AppointMentUncheckedCreateWithoutUserInput> | AppointMentCreateWithoutUserInput[] | AppointMentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AppointMentCreateOrConnectWithoutUserInput | AppointMentCreateOrConnectWithoutUserInput[]
    upsert?: AppointMentUpsertWithWhereUniqueWithoutUserInput | AppointMentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AppointMentCreateManyUserInputEnvelope
    set?: AppointMentWhereUniqueInput | AppointMentWhereUniqueInput[]
    disconnect?: AppointMentWhereUniqueInput | AppointMentWhereUniqueInput[]
    delete?: AppointMentWhereUniqueInput | AppointMentWhereUniqueInput[]
    connect?: AppointMentWhereUniqueInput | AppointMentWhereUniqueInput[]
    update?: AppointMentUpdateWithWhereUniqueWithoutUserInput | AppointMentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AppointMentUpdateManyWithWhereWithoutUserInput | AppointMentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AppointMentScalarWhereInput | AppointMentScalarWhereInput[]
  }

  export type AppointMentUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: XOR<AppointMentCreateWithoutVendorInput, AppointMentUncheckedCreateWithoutVendorInput> | AppointMentCreateWithoutVendorInput[] | AppointMentUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: AppointMentCreateOrConnectWithoutVendorInput | AppointMentCreateOrConnectWithoutVendorInput[]
    upsert?: AppointMentUpsertWithWhereUniqueWithoutVendorInput | AppointMentUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: AppointMentCreateManyVendorInputEnvelope
    set?: AppointMentWhereUniqueInput | AppointMentWhereUniqueInput[]
    disconnect?: AppointMentWhereUniqueInput | AppointMentWhereUniqueInput[]
    delete?: AppointMentWhereUniqueInput | AppointMentWhereUniqueInput[]
    connect?: AppointMentWhereUniqueInput | AppointMentWhereUniqueInput[]
    update?: AppointMentUpdateWithWhereUniqueWithoutVendorInput | AppointMentUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: AppointMentUpdateManyWithWhereWithoutVendorInput | AppointMentUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: AppointMentScalarWhereInput | AppointMentScalarWhereInput[]
  }

  export type AccountCreateNestedOneWithoutServicesInput = {
    create?: XOR<AccountCreateWithoutServicesInput, AccountUncheckedCreateWithoutServicesInput>
    connectOrCreate?: AccountCreateOrConnectWithoutServicesInput
    connect?: AccountWhereUniqueInput
  }

  export type AccountUpdateOneRequiredWithoutServicesNestedInput = {
    create?: XOR<AccountCreateWithoutServicesInput, AccountUncheckedCreateWithoutServicesInput>
    connectOrCreate?: AccountCreateOrConnectWithoutServicesInput
    upsert?: AccountUpsertWithoutServicesInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutServicesInput, AccountUpdateWithoutServicesInput>, AccountUncheckedUpdateWithoutServicesInput>
  }

  export type AccountCreateNestedOneWithoutAppointmentsAsUserInput = {
    create?: XOR<AccountCreateWithoutAppointmentsAsUserInput, AccountUncheckedCreateWithoutAppointmentsAsUserInput>
    connectOrCreate?: AccountCreateOrConnectWithoutAppointmentsAsUserInput
    connect?: AccountWhereUniqueInput
  }

  export type AccountCreateNestedOneWithoutAppointmentsAsVendorInput = {
    create?: XOR<AccountCreateWithoutAppointmentsAsVendorInput, AccountUncheckedCreateWithoutAppointmentsAsVendorInput>
    connectOrCreate?: AccountCreateOrConnectWithoutAppointmentsAsVendorInput
    connect?: AccountWhereUniqueInput
  }

  export type AccountUpdateOneRequiredWithoutAppointmentsAsUserNestedInput = {
    create?: XOR<AccountCreateWithoutAppointmentsAsUserInput, AccountUncheckedCreateWithoutAppointmentsAsUserInput>
    connectOrCreate?: AccountCreateOrConnectWithoutAppointmentsAsUserInput
    upsert?: AccountUpsertWithoutAppointmentsAsUserInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutAppointmentsAsUserInput, AccountUpdateWithoutAppointmentsAsUserInput>, AccountUncheckedUpdateWithoutAppointmentsAsUserInput>
  }

  export type AccountUpdateOneRequiredWithoutAppointmentsAsVendorNestedInput = {
    create?: XOR<AccountCreateWithoutAppointmentsAsVendorInput, AccountUncheckedCreateWithoutAppointmentsAsVendorInput>
    connectOrCreate?: AccountCreateOrConnectWithoutAppointmentsAsVendorInput
    upsert?: AccountUpsertWithoutAppointmentsAsVendorInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutAppointmentsAsVendorInput, AccountUpdateWithoutAppointmentsAsVendorInput>, AccountUncheckedUpdateWithoutAppointmentsAsVendorInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumAccountTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountType[]
    notIn?: $Enums.AccountType[]
    not?: NestedEnumAccountTypeFilter<$PrismaModel> | $Enums.AccountType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumBusinessTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.BusinessType | EnumBusinessTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.BusinessType[] | null
    notIn?: $Enums.BusinessType[] | null
    not?: NestedEnumBusinessTypeNullableFilter<$PrismaModel> | $Enums.BusinessType | null
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumAccountTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountType[]
    notIn?: $Enums.AccountType[]
    not?: NestedEnumAccountTypeWithAggregatesFilter<$PrismaModel> | $Enums.AccountType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountTypeFilter<$PrismaModel>
    _max?: NestedEnumAccountTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumBusinessTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BusinessType | EnumBusinessTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.BusinessType[] | null
    notIn?: $Enums.BusinessType[] | null
    not?: NestedEnumBusinessTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.BusinessType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumBusinessTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumBusinessTypeNullableFilter<$PrismaModel>
  }

  export type AccountCreateWithoutSessionsInput = {
    id?: string
    name: string
    email?: string | null
    phoneNumber: string
    password?: string | null
    avatarUrl?: string | null
    rating?: Decimal | DecimalJsLike | number | string
    type: $Enums.AccountType
    isSuspended?: boolean
    businessName?: string | null
    businessType?: $Enums.BusinessType | null
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: VendorServiceCreateNestedManyWithoutVendorInput
    appointmentsAsUser?: AppointMentCreateNestedManyWithoutUserInput
    appointmentsAsVendor?: AppointMentCreateNestedManyWithoutVendorInput
  }

  export type AccountUncheckedCreateWithoutSessionsInput = {
    id?: string
    name: string
    email?: string | null
    phoneNumber: string
    password?: string | null
    avatarUrl?: string | null
    rating?: Decimal | DecimalJsLike | number | string
    type: $Enums.AccountType
    isSuspended?: boolean
    businessName?: string | null
    businessType?: $Enums.BusinessType | null
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: VendorServiceUncheckedCreateNestedManyWithoutVendorInput
    appointmentsAsUser?: AppointMentUncheckedCreateNestedManyWithoutUserInput
    appointmentsAsVendor?: AppointMentUncheckedCreateNestedManyWithoutVendorInput
  }

  export type AccountCreateOrConnectWithoutSessionsInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutSessionsInput, AccountUncheckedCreateWithoutSessionsInput>
  }

  export type AccountUpsertWithoutSessionsInput = {
    update: XOR<AccountUpdateWithoutSessionsInput, AccountUncheckedUpdateWithoutSessionsInput>
    create: XOR<AccountCreateWithoutSessionsInput, AccountUncheckedCreateWithoutSessionsInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutSessionsInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutSessionsInput, AccountUncheckedUpdateWithoutSessionsInput>
  }

  export type AccountUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    isSuspended?: BoolFieldUpdateOperationsInput | boolean
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    businessType?: NullableEnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: VendorServiceUpdateManyWithoutVendorNestedInput
    appointmentsAsUser?: AppointMentUpdateManyWithoutUserNestedInput
    appointmentsAsVendor?: AppointMentUpdateManyWithoutVendorNestedInput
  }

  export type AccountUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    isSuspended?: BoolFieldUpdateOperationsInput | boolean
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    businessType?: NullableEnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: VendorServiceUncheckedUpdateManyWithoutVendorNestedInput
    appointmentsAsUser?: AppointMentUncheckedUpdateManyWithoutUserNestedInput
    appointmentsAsVendor?: AppointMentUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type UserSessionCreateWithoutAccountInput = {
    id?: string
    expiration: Date | string
    fcmToken?: string | null
    refreshToken?: string | null
    createdAt?: Date | string
    lastSignedIn?: Date | string | null
  }

  export type UserSessionUncheckedCreateWithoutAccountInput = {
    id?: string
    expiration: Date | string
    fcmToken?: string | null
    refreshToken?: string | null
    createdAt?: Date | string
    lastSignedIn?: Date | string | null
  }

  export type UserSessionCreateOrConnectWithoutAccountInput = {
    where: UserSessionWhereUniqueInput
    create: XOR<UserSessionCreateWithoutAccountInput, UserSessionUncheckedCreateWithoutAccountInput>
  }

  export type UserSessionCreateManyAccountInputEnvelope = {
    data: UserSessionCreateManyAccountInput | UserSessionCreateManyAccountInput[]
  }

  export type VendorServiceCreateWithoutVendorInput = {
    id?: string
    name: string
    imageUrl?: string | null
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VendorServiceUncheckedCreateWithoutVendorInput = {
    id?: string
    name: string
    imageUrl?: string | null
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VendorServiceCreateOrConnectWithoutVendorInput = {
    where: VendorServiceWhereUniqueInput
    create: XOR<VendorServiceCreateWithoutVendorInput, VendorServiceUncheckedCreateWithoutVendorInput>
  }

  export type VendorServiceCreateManyVendorInputEnvelope = {
    data: VendorServiceCreateManyVendorInput | VendorServiceCreateManyVendorInput[]
  }

  export type AppointMentCreateWithoutUserInput = {
    id?: string
    time: Date | string
    opened: boolean
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vendor: AccountCreateNestedOneWithoutAppointmentsAsVendorInput
  }

  export type AppointMentUncheckedCreateWithoutUserInput = {
    id?: string
    time: Date | string
    opened: boolean
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vendorId: string
  }

  export type AppointMentCreateOrConnectWithoutUserInput = {
    where: AppointMentWhereUniqueInput
    create: XOR<AppointMentCreateWithoutUserInput, AppointMentUncheckedCreateWithoutUserInput>
  }

  export type AppointMentCreateManyUserInputEnvelope = {
    data: AppointMentCreateManyUserInput | AppointMentCreateManyUserInput[]
  }

  export type AppointMentCreateWithoutVendorInput = {
    id?: string
    time: Date | string
    opened: boolean
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: AccountCreateNestedOneWithoutAppointmentsAsUserInput
  }

  export type AppointMentUncheckedCreateWithoutVendorInput = {
    id?: string
    time: Date | string
    opened: boolean
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type AppointMentCreateOrConnectWithoutVendorInput = {
    where: AppointMentWhereUniqueInput
    create: XOR<AppointMentCreateWithoutVendorInput, AppointMentUncheckedCreateWithoutVendorInput>
  }

  export type AppointMentCreateManyVendorInputEnvelope = {
    data: AppointMentCreateManyVendorInput | AppointMentCreateManyVendorInput[]
  }

  export type UserSessionUpsertWithWhereUniqueWithoutAccountInput = {
    where: UserSessionWhereUniqueInput
    update: XOR<UserSessionUpdateWithoutAccountInput, UserSessionUncheckedUpdateWithoutAccountInput>
    create: XOR<UserSessionCreateWithoutAccountInput, UserSessionUncheckedCreateWithoutAccountInput>
  }

  export type UserSessionUpdateWithWhereUniqueWithoutAccountInput = {
    where: UserSessionWhereUniqueInput
    data: XOR<UserSessionUpdateWithoutAccountInput, UserSessionUncheckedUpdateWithoutAccountInput>
  }

  export type UserSessionUpdateManyWithWhereWithoutAccountInput = {
    where: UserSessionScalarWhereInput
    data: XOR<UserSessionUpdateManyMutationInput, UserSessionUncheckedUpdateManyWithoutAccountInput>
  }

  export type UserSessionScalarWhereInput = {
    AND?: UserSessionScalarWhereInput | UserSessionScalarWhereInput[]
    OR?: UserSessionScalarWhereInput[]
    NOT?: UserSessionScalarWhereInput | UserSessionScalarWhereInput[]
    id?: StringFilter<"UserSession"> | string
    accountId?: StringFilter<"UserSession"> | string
    expiration?: DateTimeFilter<"UserSession"> | Date | string
    fcmToken?: StringNullableFilter<"UserSession"> | string | null
    refreshToken?: StringNullableFilter<"UserSession"> | string | null
    createdAt?: DateTimeFilter<"UserSession"> | Date | string
    lastSignedIn?: DateTimeNullableFilter<"UserSession"> | Date | string | null
  }

  export type VendorServiceUpsertWithWhereUniqueWithoutVendorInput = {
    where: VendorServiceWhereUniqueInput
    update: XOR<VendorServiceUpdateWithoutVendorInput, VendorServiceUncheckedUpdateWithoutVendorInput>
    create: XOR<VendorServiceCreateWithoutVendorInput, VendorServiceUncheckedCreateWithoutVendorInput>
  }

  export type VendorServiceUpdateWithWhereUniqueWithoutVendorInput = {
    where: VendorServiceWhereUniqueInput
    data: XOR<VendorServiceUpdateWithoutVendorInput, VendorServiceUncheckedUpdateWithoutVendorInput>
  }

  export type VendorServiceUpdateManyWithWhereWithoutVendorInput = {
    where: VendorServiceScalarWhereInput
    data: XOR<VendorServiceUpdateManyMutationInput, VendorServiceUncheckedUpdateManyWithoutVendorInput>
  }

  export type VendorServiceScalarWhereInput = {
    AND?: VendorServiceScalarWhereInput | VendorServiceScalarWhereInput[]
    OR?: VendorServiceScalarWhereInput[]
    NOT?: VendorServiceScalarWhereInput | VendorServiceScalarWhereInput[]
    id?: StringFilter<"VendorService"> | string
    name?: StringFilter<"VendorService"> | string
    imageUrl?: StringNullableFilter<"VendorService"> | string | null
    price?: DecimalFilter<"VendorService"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"VendorService"> | Date | string
    updatedAt?: DateTimeFilter<"VendorService"> | Date | string
    vendorId?: StringFilter<"VendorService"> | string
  }

  export type AppointMentUpsertWithWhereUniqueWithoutUserInput = {
    where: AppointMentWhereUniqueInput
    update: XOR<AppointMentUpdateWithoutUserInput, AppointMentUncheckedUpdateWithoutUserInput>
    create: XOR<AppointMentCreateWithoutUserInput, AppointMentUncheckedCreateWithoutUserInput>
  }

  export type AppointMentUpdateWithWhereUniqueWithoutUserInput = {
    where: AppointMentWhereUniqueInput
    data: XOR<AppointMentUpdateWithoutUserInput, AppointMentUncheckedUpdateWithoutUserInput>
  }

  export type AppointMentUpdateManyWithWhereWithoutUserInput = {
    where: AppointMentScalarWhereInput
    data: XOR<AppointMentUpdateManyMutationInput, AppointMentUncheckedUpdateManyWithoutUserInput>
  }

  export type AppointMentScalarWhereInput = {
    AND?: AppointMentScalarWhereInput | AppointMentScalarWhereInput[]
    OR?: AppointMentScalarWhereInput[]
    NOT?: AppointMentScalarWhereInput | AppointMentScalarWhereInput[]
    id?: StringFilter<"AppointMent"> | string
    time?: DateTimeFilter<"AppointMent"> | Date | string
    opened?: BoolFilter<"AppointMent"> | boolean
    note?: StringNullableFilter<"AppointMent"> | string | null
    createdAt?: DateTimeFilter<"AppointMent"> | Date | string
    updatedAt?: DateTimeFilter<"AppointMent"> | Date | string
    userId?: StringFilter<"AppointMent"> | string
    vendorId?: StringFilter<"AppointMent"> | string
  }

  export type AppointMentUpsertWithWhereUniqueWithoutVendorInput = {
    where: AppointMentWhereUniqueInput
    update: XOR<AppointMentUpdateWithoutVendorInput, AppointMentUncheckedUpdateWithoutVendorInput>
    create: XOR<AppointMentCreateWithoutVendorInput, AppointMentUncheckedCreateWithoutVendorInput>
  }

  export type AppointMentUpdateWithWhereUniqueWithoutVendorInput = {
    where: AppointMentWhereUniqueInput
    data: XOR<AppointMentUpdateWithoutVendorInput, AppointMentUncheckedUpdateWithoutVendorInput>
  }

  export type AppointMentUpdateManyWithWhereWithoutVendorInput = {
    where: AppointMentScalarWhereInput
    data: XOR<AppointMentUpdateManyMutationInput, AppointMentUncheckedUpdateManyWithoutVendorInput>
  }

  export type AccountCreateWithoutServicesInput = {
    id?: string
    name: string
    email?: string | null
    phoneNumber: string
    password?: string | null
    avatarUrl?: string | null
    rating?: Decimal | DecimalJsLike | number | string
    type: $Enums.AccountType
    isSuspended?: boolean
    businessName?: string | null
    businessType?: $Enums.BusinessType | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: UserSessionCreateNestedManyWithoutAccountInput
    appointmentsAsUser?: AppointMentCreateNestedManyWithoutUserInput
    appointmentsAsVendor?: AppointMentCreateNestedManyWithoutVendorInput
  }

  export type AccountUncheckedCreateWithoutServicesInput = {
    id?: string
    name: string
    email?: string | null
    phoneNumber: string
    password?: string | null
    avatarUrl?: string | null
    rating?: Decimal | DecimalJsLike | number | string
    type: $Enums.AccountType
    isSuspended?: boolean
    businessName?: string | null
    businessType?: $Enums.BusinessType | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: UserSessionUncheckedCreateNestedManyWithoutAccountInput
    appointmentsAsUser?: AppointMentUncheckedCreateNestedManyWithoutUserInput
    appointmentsAsVendor?: AppointMentUncheckedCreateNestedManyWithoutVendorInput
  }

  export type AccountCreateOrConnectWithoutServicesInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutServicesInput, AccountUncheckedCreateWithoutServicesInput>
  }

  export type AccountUpsertWithoutServicesInput = {
    update: XOR<AccountUpdateWithoutServicesInput, AccountUncheckedUpdateWithoutServicesInput>
    create: XOR<AccountCreateWithoutServicesInput, AccountUncheckedCreateWithoutServicesInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutServicesInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutServicesInput, AccountUncheckedUpdateWithoutServicesInput>
  }

  export type AccountUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    isSuspended?: BoolFieldUpdateOperationsInput | boolean
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    businessType?: NullableEnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: UserSessionUpdateManyWithoutAccountNestedInput
    appointmentsAsUser?: AppointMentUpdateManyWithoutUserNestedInput
    appointmentsAsVendor?: AppointMentUpdateManyWithoutVendorNestedInput
  }

  export type AccountUncheckedUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    isSuspended?: BoolFieldUpdateOperationsInput | boolean
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    businessType?: NullableEnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: UserSessionUncheckedUpdateManyWithoutAccountNestedInput
    appointmentsAsUser?: AppointMentUncheckedUpdateManyWithoutUserNestedInput
    appointmentsAsVendor?: AppointMentUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type AccountCreateWithoutAppointmentsAsUserInput = {
    id?: string
    name: string
    email?: string | null
    phoneNumber: string
    password?: string | null
    avatarUrl?: string | null
    rating?: Decimal | DecimalJsLike | number | string
    type: $Enums.AccountType
    isSuspended?: boolean
    businessName?: string | null
    businessType?: $Enums.BusinessType | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: UserSessionCreateNestedManyWithoutAccountInput
    services?: VendorServiceCreateNestedManyWithoutVendorInput
    appointmentsAsVendor?: AppointMentCreateNestedManyWithoutVendorInput
  }

  export type AccountUncheckedCreateWithoutAppointmentsAsUserInput = {
    id?: string
    name: string
    email?: string | null
    phoneNumber: string
    password?: string | null
    avatarUrl?: string | null
    rating?: Decimal | DecimalJsLike | number | string
    type: $Enums.AccountType
    isSuspended?: boolean
    businessName?: string | null
    businessType?: $Enums.BusinessType | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: UserSessionUncheckedCreateNestedManyWithoutAccountInput
    services?: VendorServiceUncheckedCreateNestedManyWithoutVendorInput
    appointmentsAsVendor?: AppointMentUncheckedCreateNestedManyWithoutVendorInput
  }

  export type AccountCreateOrConnectWithoutAppointmentsAsUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutAppointmentsAsUserInput, AccountUncheckedCreateWithoutAppointmentsAsUserInput>
  }

  export type AccountCreateWithoutAppointmentsAsVendorInput = {
    id?: string
    name: string
    email?: string | null
    phoneNumber: string
    password?: string | null
    avatarUrl?: string | null
    rating?: Decimal | DecimalJsLike | number | string
    type: $Enums.AccountType
    isSuspended?: boolean
    businessName?: string | null
    businessType?: $Enums.BusinessType | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: UserSessionCreateNestedManyWithoutAccountInput
    services?: VendorServiceCreateNestedManyWithoutVendorInput
    appointmentsAsUser?: AppointMentCreateNestedManyWithoutUserInput
  }

  export type AccountUncheckedCreateWithoutAppointmentsAsVendorInput = {
    id?: string
    name: string
    email?: string | null
    phoneNumber: string
    password?: string | null
    avatarUrl?: string | null
    rating?: Decimal | DecimalJsLike | number | string
    type: $Enums.AccountType
    isSuspended?: boolean
    businessName?: string | null
    businessType?: $Enums.BusinessType | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: UserSessionUncheckedCreateNestedManyWithoutAccountInput
    services?: VendorServiceUncheckedCreateNestedManyWithoutVendorInput
    appointmentsAsUser?: AppointMentUncheckedCreateNestedManyWithoutUserInput
  }

  export type AccountCreateOrConnectWithoutAppointmentsAsVendorInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutAppointmentsAsVendorInput, AccountUncheckedCreateWithoutAppointmentsAsVendorInput>
  }

  export type AccountUpsertWithoutAppointmentsAsUserInput = {
    update: XOR<AccountUpdateWithoutAppointmentsAsUserInput, AccountUncheckedUpdateWithoutAppointmentsAsUserInput>
    create: XOR<AccountCreateWithoutAppointmentsAsUserInput, AccountUncheckedCreateWithoutAppointmentsAsUserInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutAppointmentsAsUserInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutAppointmentsAsUserInput, AccountUncheckedUpdateWithoutAppointmentsAsUserInput>
  }

  export type AccountUpdateWithoutAppointmentsAsUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    isSuspended?: BoolFieldUpdateOperationsInput | boolean
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    businessType?: NullableEnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: UserSessionUpdateManyWithoutAccountNestedInput
    services?: VendorServiceUpdateManyWithoutVendorNestedInput
    appointmentsAsVendor?: AppointMentUpdateManyWithoutVendorNestedInput
  }

  export type AccountUncheckedUpdateWithoutAppointmentsAsUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    isSuspended?: BoolFieldUpdateOperationsInput | boolean
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    businessType?: NullableEnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: UserSessionUncheckedUpdateManyWithoutAccountNestedInput
    services?: VendorServiceUncheckedUpdateManyWithoutVendorNestedInput
    appointmentsAsVendor?: AppointMentUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type AccountUpsertWithoutAppointmentsAsVendorInput = {
    update: XOR<AccountUpdateWithoutAppointmentsAsVendorInput, AccountUncheckedUpdateWithoutAppointmentsAsVendorInput>
    create: XOR<AccountCreateWithoutAppointmentsAsVendorInput, AccountUncheckedCreateWithoutAppointmentsAsVendorInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutAppointmentsAsVendorInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutAppointmentsAsVendorInput, AccountUncheckedUpdateWithoutAppointmentsAsVendorInput>
  }

  export type AccountUpdateWithoutAppointmentsAsVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    isSuspended?: BoolFieldUpdateOperationsInput | boolean
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    businessType?: NullableEnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: UserSessionUpdateManyWithoutAccountNestedInput
    services?: VendorServiceUpdateManyWithoutVendorNestedInput
    appointmentsAsUser?: AppointMentUpdateManyWithoutUserNestedInput
  }

  export type AccountUncheckedUpdateWithoutAppointmentsAsVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    isSuspended?: BoolFieldUpdateOperationsInput | boolean
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    businessType?: NullableEnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: UserSessionUncheckedUpdateManyWithoutAccountNestedInput
    services?: VendorServiceUncheckedUpdateManyWithoutVendorNestedInput
    appointmentsAsUser?: AppointMentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserSessionCreateManyAccountInput = {
    id?: string
    expiration: Date | string
    fcmToken?: string | null
    refreshToken?: string | null
    createdAt?: Date | string
    lastSignedIn?: Date | string | null
  }

  export type VendorServiceCreateManyVendorInput = {
    id?: string
    name: string
    imageUrl?: string | null
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointMentCreateManyUserInput = {
    id?: string
    time: Date | string
    opened: boolean
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vendorId: string
  }

  export type AppointMentCreateManyVendorInput = {
    id?: string
    time: Date | string
    opened: boolean
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type UserSessionUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    fcmToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSignedIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserSessionUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    fcmToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSignedIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserSessionUncheckedUpdateManyWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    fcmToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSignedIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VendorServiceUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VendorServiceUncheckedUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VendorServiceUncheckedUpdateManyWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointMentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    opened?: BoolFieldUpdateOperationsInput | boolean
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: AccountUpdateOneRequiredWithoutAppointmentsAsVendorNestedInput
  }

  export type AppointMentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    opened?: BoolFieldUpdateOperationsInput | boolean
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendorId?: StringFieldUpdateOperationsInput | string
  }

  export type AppointMentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    opened?: BoolFieldUpdateOperationsInput | boolean
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendorId?: StringFieldUpdateOperationsInput | string
  }

  export type AppointMentUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    opened?: BoolFieldUpdateOperationsInput | boolean
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: AccountUpdateOneRequiredWithoutAppointmentsAsUserNestedInput
  }

  export type AppointMentUncheckedUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    opened?: BoolFieldUpdateOperationsInput | boolean
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AppointMentUncheckedUpdateManyWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    opened?: BoolFieldUpdateOperationsInput | boolean
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}