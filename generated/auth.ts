import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { AuthServiceClient as _auth_v1_AuthServiceClient, AuthServiceDefinition as _auth_v1_AuthServiceDefinition } from './auth/v1/AuthService';
import type { IntrospectRequest as _auth_v1_IntrospectRequest, IntrospectRequest__Output as _auth_v1_IntrospectRequest__Output } from './auth/v1/IntrospectRequest';
import type { IntrospectResponse as _auth_v1_IntrospectResponse, IntrospectResponse__Output as _auth_v1_IntrospectResponse__Output } from './auth/v1/IntrospectResponse';
import type { PhoneSendCodeRequest as _auth_v1_PhoneSendCodeRequest, PhoneSendCodeRequest__Output as _auth_v1_PhoneSendCodeRequest__Output } from './auth/v1/PhoneSendCodeRequest';
import type { PhoneSendCodeResponse as _auth_v1_PhoneSendCodeResponse, PhoneSendCodeResponse__Output as _auth_v1_PhoneSendCodeResponse__Output } from './auth/v1/PhoneSendCodeResponse';
import type { PhoneVerifyCodeRequest as _auth_v1_PhoneVerifyCodeRequest, PhoneVerifyCodeRequest__Output as _auth_v1_PhoneVerifyCodeRequest__Output } from './auth/v1/PhoneVerifyCodeRequest';
import type { PhoneVerifyCodeResponse as _auth_v1_PhoneVerifyCodeResponse, PhoneVerifyCodeResponse__Output as _auth_v1_PhoneVerifyCodeResponse__Output } from './auth/v1/PhoneVerifyCodeResponse';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  auth: {
    v1: {
      AuthService: SubtypeConstructor<typeof grpc.Client, _auth_v1_AuthServiceClient> & { service: _auth_v1_AuthServiceDefinition }
      IntrospectRequest: MessageTypeDefinition<_auth_v1_IntrospectRequest, _auth_v1_IntrospectRequest__Output>
      IntrospectResponse: MessageTypeDefinition<_auth_v1_IntrospectResponse, _auth_v1_IntrospectResponse__Output>
      PhoneSendCodeRequest: MessageTypeDefinition<_auth_v1_PhoneSendCodeRequest, _auth_v1_PhoneSendCodeRequest__Output>
      PhoneSendCodeResponse: MessageTypeDefinition<_auth_v1_PhoneSendCodeResponse, _auth_v1_PhoneSendCodeResponse__Output>
      PhoneVerifyCodeRequest: MessageTypeDefinition<_auth_v1_PhoneVerifyCodeRequest, _auth_v1_PhoneVerifyCodeRequest__Output>
      PhoneVerifyCodeResponse: MessageTypeDefinition<_auth_v1_PhoneVerifyCodeResponse, _auth_v1_PhoneVerifyCodeResponse__Output>
    }
  }
}

