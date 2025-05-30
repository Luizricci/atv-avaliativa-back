PGDMP                       }            heros    17.4    17.4     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false            �           1262    16407    heros    DATABASE     k   CREATE DATABASE heros WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'pt-BR';
    DROP DATABASE heros;
                     postgres    false            �            1259    16409    editoras    TABLE     |   CREATE TABLE public.editoras (
    id integer NOT NULL,
    name_editora character varying(255) NOT NULL,
    photo text
);
    DROP TABLE public.editoras;
       public         heap r       postgres    false            �            1259    16408    editoras_id_seq    SEQUENCE     �   CREATE SEQUENCE public.editoras_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.editoras_id_seq;
       public               postgres    false    218            �           0    0    editoras_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.editoras_id_seq OWNED BY public.editoras.id;
          public               postgres    false    217            �            1259    16416    herois    TABLE     {   CREATE TABLE public.herois (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    editoras_id integer
);
    DROP TABLE public.herois;
       public         heap r       postgres    false            �            1259    16415    herois_id_seq    SEQUENCE     �   CREATE SEQUENCE public.herois_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.herois_id_seq;
       public               postgres    false    220            �           0    0    herois_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.herois_id_seq OWNED BY public.herois.id;
          public               postgres    false    219            \           2604    16412    editoras id    DEFAULT     j   ALTER TABLE ONLY public.editoras ALTER COLUMN id SET DEFAULT nextval('public.editoras_id_seq'::regclass);
 :   ALTER TABLE public.editoras ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    217    218    218            ]           2604    16419 	   herois id    DEFAULT     f   ALTER TABLE ONLY public.herois ALTER COLUMN id SET DEFAULT nextval('public.herois_id_seq'::regclass);
 8   ALTER TABLE public.herois ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    220    219    220            �          0    16409    editoras 
   TABLE DATA           ;   COPY public.editoras (id, name_editora, photo) FROM stdin;
    public               postgres    false    218   Z       �          0    16416    herois 
   TABLE DATA           7   COPY public.herois (id, name, editoras_id) FROM stdin;
    public               postgres    false    220   �                   0    0    editoras_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.editoras_id_seq', 7, true);
          public               postgres    false    217                       0    0    herois_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.herois_id_seq', 14, true);
          public               postgres    false    219            _           2606    16414    editoras editoras_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.editoras
    ADD CONSTRAINT editoras_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.editoras DROP CONSTRAINT editoras_pkey;
       public                 postgres    false    218            a           2606    16421    herois herois_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.herois
    ADD CONSTRAINT herois_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.herois DROP CONSTRAINT herois_pkey;
       public                 postgres    false    220            b           2606    16422    herois herois_editoras_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.herois
    ADD CONSTRAINT herois_editoras_id_fkey FOREIGN KEY (editoras_id) REFERENCES public.editoras(id);
 H   ALTER TABLE ONLY public.herois DROP CONSTRAINT herois_editoras_id_fkey;
       public               postgres    false    4703    220    218            �   l   x��A
�0@���]F�L��.kO(C��,�x����|�ߎ������
����|1h���Y�j�����Jq��Js��~wM>��!w�1LF��l�N��Dt"�&Dn      �   �   x�%ͽ�0���<��N�+"J�	�4�`��D�����!X�M�C�W�t�	(���`��Wdсd)lq�2�*�(�����Pt�%��*�ϊ��ǥ���k�aߍ���<^Եy3�$9��?s8�!�Յ�����=45ٔ%�ж8Ŀ͌1�>w5n     